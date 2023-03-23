import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

import useRecipeSearch from '../data/useRecipeSearch'
import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'
import { Banner, ContentContainer } from '../components/Webpages'
import { SearchBar, FlexQueries, FlexItem } from '../components/NavBar'
import { ResultCard, FlexMenu } from '../components/ResultCard'

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
  const [ show, setShow ] = useState(false)

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
              {!show && <>
                    <label>
                      Search:
                      <input key={formNames[0]} name={formNames[0]} value={formValues[formNames[0]]} placeholder={formNames[0]} onChange={handleInputChange} />
                    </label>
                    <button onClick={e =>{
                      setShow(true)
                    }}>Advanced Search</button>
                    <br/>
                    
                </>}
              {show && 
                <>
                  {formNames.map(name =>(
                    <>  
                      <label>
                        {name}:
                        <input key={name} name={name} value={formValues[name]} placeholder={name} onChange={handleInputChange} />
                      </label>
                      <br/>
                    </>
                  ))}
                  <button onClick={e =>{
                    setShow(false)
                  }}>X</button>
                </>
              }
              <button type="submit">&#128269;</button>
          </form>
        </SearchBar>

        {error && <ErrorContainer>Error: Try double checking your spelling!</ErrorContainer>}
        {loading ? <Spinner /> : (
          <FlexMenu>
            {recipes.map(recipe => (
              <ResultCard
                id={recipe.id}
                key={recipe.id}
                title={recipe.title}
                url={recipe.image}
              />
            ))}
          </FlexMenu>
        )}
      </ContentContainer>
    </>
  )
}
export default Search
