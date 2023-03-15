import { useParams } from 'react-router-dom'

 import useRecipeSearch from '../data/useRecipeSearch'
 import Spinner from '../components/Spinner'
 import ErrorContainer from '../components/ErrorContainer'

 import { Banner, ContentContainer } from '../components/Webpages'
 import { PageHeader } from '../components/Texts'
 
 function Search({ query }) {
   const [recipes, loading, error] = useRecipeSearch(query)


   console.log("useParams():", useParams())

   return (
     <>
     <Banner
            url="/media/searchBanner.jpeg"
            title="Search recipes"/>

       <ContentContainer>
        <PageHeader>Search: {query}</PageHeader>
        {error && <ErrorContainer>Error: Try double checking your spelling!</ErrorContainer>}
        {loading ? <Spinner /> : (
            <div>
            {console.log("Recipes: ", recipes)}
            {recipes.map(recipe => {
                return(
                <div key={recipe.id}>
                    <p>{recipe.id}</p>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
                )
            })}
            </div>
        )}
       </ContentContainer>
     </>
   )
 }
 export default Search