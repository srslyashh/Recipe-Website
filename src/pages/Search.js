import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

import useRecipeSearch from '../data/useRecipeSearch'
import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'
import { Banner, ContentContainer } from '../components/Webpages'
import { SearchBar } from '../components/NavBar'

// All form fields
const formNames = ["query", "cuisine", "diet", "intolerances", 
  "type", "includeIngredients", "excludeIngredients"]

// Returns a copy of an object without any empty attirbutes SRC: https://stackoverflow.com/a/65443021
function filterEmptyAttributes(obj) {
  return Object.entries(obj).reduce((acc, [k, v]) => v ? {...acc, [k]:v} : acc , {})
}

// Maps a set of params to their search parm if present, otherwise and empty string
function mapParamsToSearchParams(stateParams, searchParams) {
  return stateParams.reduce((acc, name) => {
    return {
      ...acc,
      [name]: searchParams.get(name) || ""
    }
  }, {})
}

function Search() {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const [ formValues, setFormValues ] = useState(mapParamsToSearchParams(formNames, searchParams))
  const [ recipes, loading, error ] = useRecipeSearch(searchParams)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <>
      <Banner
        url="/media/searchBanner.jpeg"
        title="Search recipes"/>
      <ContentContainer>
        <SearchBar>
          <form onSubmit={e => {
            e.preventDefault()
            // Keep the URL cleaner by only including non-empty form attributes
            setSearchParams(filterEmptyAttributes(formValues))
          }}>
            {formNames.map(name =>(
              <>
                <label>
                  {name}:
                  <input key={name} name={name} value={formValues[name]} placeholder={name} onChange={handleInputChange} />
                </label>
                <br/>
              </>
            ))}
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
