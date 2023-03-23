import 
{ 
  Banner
} 
from '../components/Webpages'
import { useParams } from 'react-router-dom'
import useRecipeInformation from '../data/useRecipeInformation';
import IngredientsList from '../components/IngredientsList';
import styled from '@emotion/styled/macro'
import useSummary from '../data/useSummary';

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
  const [ info, ingredients ] = useRecipeInformation(id);
  const [ summary ] = useSummary(id);
  const KEY = process.env.REACT_APP_SPOONACULAR_API_KEY || console.error("SET YOUR API KEY IN .env!")
  
  return(
    <RecipeDiv>
      <Banner 
        recipe={info}/>  
      <IngredientsList ingredients={ingredients}/>
      <Frame src={`https://api.spoonacular.com/recipes/${id}/nutritionLabel?apiKey=${KEY}`} title="Nutrition Facts"/>
      <div dangerouslySetInnerHTML={{__html: summary.summary}}/>
    </RecipeDiv>
  ) 
}
export default Recipe
