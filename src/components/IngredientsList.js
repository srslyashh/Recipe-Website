import styled from '@emotion/styled'

const List = styled.ul`
    padding: 5px;
    columns: 1;
    
`

const IngredientsDiv = styled.div`
  background-color: #faf7f0;
  border: 1px solid #faf7f0;
  border-radius: 5px;

h1{
  font-family: 'Hepta Slab', serif;
  font-size: 25px;
}

@media(min-width: 390px) and (max-width: 790px)
{
    position: relative;
    top: 10px;
    left: 25px;
    margin-right: 200px;
    padding: 10px 15px 10px 20px;
}
@media(min-width: 800px)
{
    position: relative;
    top: 15px;
    left: 80px;
    margin-right: 510px;
    padding: 10px 10px 10px 20px;
}
`

const ListItem = styled.li`
@media(min-width: 390px) and (max-width: 790px)
{
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    margin-right: 20px;
}

@media(min-width: 800px)
{
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    left: 25px;
}
`

function IngredientsList(props) {
    return (
      <IngredientsDiv>
        <h1>Ingredients:</h1>
        <List>
          {props.ingredients.map((ingredient, index) => (
            <ListItem key={index}>
                {ingredient.original}
            </ListItem>
          ))}
        </List>
      </IngredientsDiv>
  )
}

export default IngredientsList