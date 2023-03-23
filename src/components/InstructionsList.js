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
  margin-top: 35px;
  background-color: #faf7f0;
  border: 1px solid #faf7f0;
  border-radius: 5px;
  padding: 10px 10px 10px 20px;
  margin-bottom: 120px;
@media(min-width: 390px) and (max-width: 790px)
{
    position: relative;
    margin-right: 200px;
    top: -700px;
    left: 25px;
}
@media(min-width: 800px)
{
    position: relative;
    left: 80px;
    top: 10px;
    margin-right:510px;
    
}

h1{
    font-family: 'Hepta Slab', serif;
    font-size: 25px;
    position: relative;
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
