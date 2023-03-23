import styled from '@emotion/styled'

const List = styled.ul`
    padding: 5px;
    columns: 1;
    
`

const IngredientsDiv = styled.div`
@media(min-width: 390px) and (max-width: 790px)
{
    position: relative;
    top: 10px;
    left: 25px;
    
}
@media(min-width: 800px)
{
    position: relative;
    top: 10px;
    left: 25px;
}
`

const ListItem = styled.li`
@media(min-width: 390px) and (max-width: 790px)
{
    font-size: 14px;
}

@media(min-width: 800px)
{
    font-size: 22px;
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