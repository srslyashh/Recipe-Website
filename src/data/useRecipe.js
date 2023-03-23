import { useState, useEffect } from "react"

function useRecipe(id) {
  const [ instructionsSet, setInstructionsSet ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState("")

  const KEY = process.env.REACT_APP_SPOONACULAR_API_KEY || console.error("SET YOUR API KEY IN .env!")
  const DISABLE_API_CALLS = process.env.REACT_APP_DISABLE_API_CALLS === "true"

  useEffect(() => {
    let ignore = false
    const controller = new AbortController()
    async function fetchSearchResults() {
      if (DISABLE_API_CALLS) return
      setLoading(true)
      let responseBody = {}
      /*
      Parse query array and iterate through for search parameters
      */
      const url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`
      try {
        const response = await fetch(url, { signal: controller.signal })
        if(response.status !== 200) {
          setError(true)
        } else {
          responseBody = await response.json()
          setError(false)
        }

      } catch (e) {
        if (e instanceof DOMException) {
          console.log("HTTP request cancelled")
        } else {
          setError(true)
          console.error("Error: ", e)
          throw e
        }
      }

      if (!ignore) {
        setInstructionsSet(responseBody.results || [])
        setLoading(false)

      }
    }
    if (id) {
      fetchSearchResults()
    }
    return () => {
      ignore = true
      controller.abort()
    }
  }, [ id, KEY, DISABLE_API_CALLS])

  return [instructionsSet, loading, error]
}

export default useRecipe
