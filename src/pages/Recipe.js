import 
{ 
  Banner
} 
from '../components/Webpages'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import useRecipeInformation from '../data/useRecipeInformation';
import IngredientsList from '../components/IngredientsList';
import styled from '@emotion/styled/macro'
import useSummary from '../data/useSummary';
import useRecipe from '../data/useRecipe';

const RecipeDiv = styled.div`
  display: inline-block;
`

const Frame = styled.iframe`
  @media(min-width: 390px) and (max-width: 790px)
  {
    overflow:hidden;
    border:none;
    width:500px;
    height:700px;
    position: relative;
    left: 300px;
  }
  @media(min-width: 800px)
  {
    overflow:hidden;
    border:none;
    width:500px;
    height:700px;
    position: relative;
    left: 850px;
  }
`


function Recipe() {
  const { id } = useParams();
  const [ info, ingredients, loadingInfo, errorInfo ] = useRecipeInformation(id);
  const [ summary, loadingSummary, errorSummary] = useSummary(id);
  // const [ instructions, loading, error] = useRecipe(id);
  const KEY = process.env.REACT_APP_SPOONACULAR_API_KEY || console.error("SET YOUR API KEY IN .env!")
  
  return(
    <RecipeDiv>
      {(loadingSummary || loadingInfo) ? <Spinner/> : (
        <>
        <Banner 
          recipe={info}/>  
        <IngredientsList ingredients={ingredients}/>
        <Frame src={`https://api.spoonacular.com/recipes/${id}/nutritionLabel?apiKey=${KEY}`} title="Nutrition Facts"/>
        <div dangerouslySetInnerHTML={{__html: summary.summary}}/>
        </>
      )}
    </RecipeDiv>
  ) 
}
export default Recipe
