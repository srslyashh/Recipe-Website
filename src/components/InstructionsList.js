import styled from '@emotion/styled'

const breakpoints = {
    sm: 768,
    med: 1024
}

const List = styled.ol`
    padding: 5px;
    columns: 1;

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
      <>
        <h1>Instructions:</h1>
        <List>
          {props.instructions.steps.map((instruction, index) => (
            <ListItem key={index}>
                {instruction.step}
            </ListItem>
          ))}
        </List>
      </>
  )
}

export default InstructionsList