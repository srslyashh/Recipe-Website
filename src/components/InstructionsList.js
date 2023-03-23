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
    
}
`

const ListItem = styled.li`
    padding: 4px;
    @media (min-height: ${breakpoints.sm + 1}px) and (max-height: ${breakpoints.med}px) {
        font-size: 18px;
    }
    @media (max-height: ${breakpoints.sm}px) {
        font-size: 22px;
    }
    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.med}px) {
        font-size: 24px;
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
                {`${instruction.number}. ${instruction.step}`}
            </ListItem>
          ))}
        </List>
      </InstructionsDiv>
  )
}

export default InstructionsList
