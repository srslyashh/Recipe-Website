import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

import useRecipeSearch from '../data/useRecipeSearch'
import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'

function Search() {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const [ searchQuery, setSearchQuery ] = useState(searchParams.get("search") || "")
  const [ recipes, loading, error ] = useRecipeSearch(searchParams.get("search"))

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        setSearchParams({ search: searchQuery })
      }}>
        <input value={searchQuery} placeholder="Search by Recipe Name..." onChange={e => setSearchQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {error && <ErrorContainer>Error: Try double checking your spelling!</ErrorContainer>}
      {loading ? <Spinner /> : (
        <div>
          {recipes.map(recipe => (
            <div key={recipe.id}>
              <p>{recipe.id}</p>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default Search
