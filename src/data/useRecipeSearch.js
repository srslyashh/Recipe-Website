import { useState, useEffect } from "react"

function useRecipeSearch(query) {
  const [ recipes, setRecipes ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState("")

  const KEY = process.env.REACT_APP_SPOONACULAR_API_KEY || console.error("SET YOUR API KEY IN .env!")
  const DISABLE_API_CALLS = process.env.REACT_APP_DISABLE_API_CALLS || false

  useEffect(() => {
    let ignore = false
    const controller = new AbortController()
    async function fetchSearchResults() {
      setLoading(true)
      let responseBody = {}
      /*
      Parse query array and iterate through for search parameters
      */
      try {
        if (DISABLE_API_CALLS) return
        console.log(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${KEY}`)
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${KEY}`,
          { signal: controller.signal }
        )
        if(response.status !== 200){
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
        setRecipes(responseBody.results || [])
        setLoading(false)

      }
    }
    if (query) {
      fetchSearchResults()
    }
    return () => {
      ignore = true
      controller.abort()
    }
  }, [ query, KEY, DISABLE_API_CALLS])

  return [recipes, loading, error]
}

export default useRecipeSearch
