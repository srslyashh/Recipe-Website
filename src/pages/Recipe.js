import 
{ 
  Banner
} 
from '../components/Webpages'
import { useParams } from 'react-router-dom'
import useRecipeInformation from '../data/useRecipeInformation';
import IngredientsList from '../components/IngredientsList';
import InstructionsList from '../components/InstructionsList';
import styled from '@emotion/styled/macro'
import useRecipe from '../data/useRecipe';

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
  const [ info ] = useRecipeInformation(id);
  const [ instructions ] = useRecipe(id);
  const KEY = process.env.REACT_APP_SPOONACULAR_API_KEY || console.error("SET YOUR API KEY IN .env!")
  
  return(
    <div>
      <Banner 
        recipe={info}/>  
      <Frame src={`https://api.spoonacular.com/recipes/${id}/nutritionLabel?apiKey=${KEY}`} title="Nutrition Facts"/>
      <IngredientsList ingredients={info.extendedIngredients}/>
      <InstructionsList instructions={instructions}/>
    </div>
  ) 
}
export default Recipe
