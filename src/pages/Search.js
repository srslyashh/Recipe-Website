import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

 import useRecipeSearch from '../data/useRecipeSearch'
 import Spinner from '../components/Spinner'
 import ErrorContainer from '../components/ErrorContainer'
 import { Banner, ContentContainer } from '../components/Webpages'
 import { PageHeader } from '../components/Texts'
 import { SearchBar } from '../components/NavBar'
 
function Search() {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const [ searchQuery, setSearchQuery ] = useState(searchParams.get("query") || "")
  const [ recipes, loading, error ] = useRecipeSearch(searchParams)

  return (
    <>
      <Banner
            url="/media/searchBanner.jpeg"
            title="Search recipes"/>
      <ContentContainer>
        <SearchBar>
        <form onSubmit={e => {
          e.preventDefault()
          setSearchParams({ query: searchQuery })
        }}>
          <input value={searchQuery} placeholder="Search by Recipe Name..." onChange={e => setSearchQuery(e.target.value)} />
          <button type="submit">&#128269;</button>
        </form>
        </SearchBar>

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
      </ContentContainer>
    </>
  )
}
export default Search
