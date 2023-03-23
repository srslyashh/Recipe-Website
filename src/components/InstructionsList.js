import styled from '@emotion/styled'

const breakpoints = {
    sm: 768,
    med: 1024
}

const List = styled.ol`
@media(min-width: 390px) and (max-width: 790px)
{
    padding: 5px;
    columns: 1;
}
@media(min-width: 800px)
{
    padding: 5px;
    columns: 1;

}
`

const InstructionsDiv = styled.div`
@media(min-width: 390px) and (max-width: 790px)
{
    position: relative;
    
}
@media(min-width: 800px)
{
    position: relative;
    left: 80px;
    top: 10px;
    
}

h1{
    font-family: 'Hepta Slab', serif;
    font-size: 25px;
    position: relative;
}
`

const ListItem = styled.li`
    padding: 4px;
    position: relative;
    left: 50px;
    margin-right: 550px;
    font-family: 'Open Sans', sans-serif;

    @media (min-height: ${breakpoints.sm + 1}px) and (max-height: ${breakpoints.med}px) {
        font-size: 18px;
    }
    @media (max-height: ${breakpoints.sm}px) {
        font-size: 20px;
    }
    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.med}px) {
        font-size: 20px;
    }
    @media (max-width: ${breakpoints.sm}px) {
        font-size: 32px;
    }
`

function InstructionsList(props) {
    return (
      <InstructionsDiv>
        <h1>Instructions:</h1>
        <List>
          {props.instructions.map((instruction, index) => (
            <ListItem key={index}>
                {`${instruction.step}`}
            </ListItem>
          ))}
        </List>
      </InstructionsDiv>
  )
}

export default InstructionsList
