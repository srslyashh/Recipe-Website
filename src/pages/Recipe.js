import 
{ 
  Banner
} 
from '../components/Webpages'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import useRecipeInformation from '../data/useRecipeInformation';
import IngredientsList from '../components/IngredientsList';
import InstructionsList from '../components/InstructionsList';
import styled from '@emotion/styled/macro'
import useSummary from '../data/useSummary';
import useRecipe from '../data/useRecipe';

const RecipeDiv = styled.div`
  display: inline-block;
`

const Frame = styled.iframe`
  margin: 20px;
  overflow: none;
  @media(min-width: 390px) and (max-width: 790px)
  {
    overflow:hidden;
    border:none;
    width:500px;
    height:700px;
    position: relative;
    ${'' /* left: 300px; */}
    display:block;
    
  }
  @media(min-width: 800px)
  {
    overflow:hidden;
    display:block;
    border:none;
    width:500px;
    height:700px;
    position: absolute;
    left: 1000px;
    top: 650px;
    ${'' /* left: 850px; */}
  }
`


function Recipe() {
  const { id } = useParams();
  const [ info, ingredients, loadingInfo, errorInfo ] = useRecipeInformation(id);
  const [ steps, loadingSteps, errorSteps] = useRecipe(id);
  // const [ instructions, loading, error] = useRecipe(id);
  const KEY = process.env.REACT_APP_SPOONACULAR_API_KEY || console.error("SET YOUR API KEY IN .env!")
  console.log("Steps: ", steps)
  return(
    <RecipeDiv>
      {(loadingInfo || loadingSteps) ? <Spinner/> : (
        <>
        <Banner 
          recipe={info}/>  
        <IngredientsList ingredients={ingredients}/>
        <Frame src={`https://api.spoonacular.com/recipes/${id}/nutritionLabel?apiKey=${KEY}`} title="Nutrition Facts"/>
        {steps && steps.length !== 0 && 
          <InstructionsList instructions={steps[0].steps}/>
        }
        </>
      )}
    </RecipeDiv>
  ) 
}
export default Recipe
