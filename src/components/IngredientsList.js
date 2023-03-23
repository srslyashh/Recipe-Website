import styled from '@emotion/styled'

const List = styled.ul`
    padding: 5px;
    columns: 1;
    
`

const IngredientsDiv = styled.div`

h1{
  font-family: 'Hepta Slab', serif;
  font-size: 25px;
}

@media(min-width: 390px) and (max-width: 790px)
{
    position: relative;
    top: 10px;
    left: 25px;
}
@media(min-width: 800px)
{
    position: relative;
    top: 15px;
    left: 80px;
}
`

const ListItem = styled.li`
@media(min-width: 390px) and (max-width: 790px)
{
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
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