import styled from '@emotion/styled'

const Card = styled.div`
    width: 500px;
    height: 200px;
    background-color: #f0f0f0;
    border: 2px solid #f0f0f0;
    border-radius: 5px;

    img{
        width: 180px;
        height: 200px;
    }

    h1{
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 20px;
        position: relative;
        top: -195px;
        left: 200px;
    }

    h2{
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 17px;
        position: relative;
        top: -190px;
        left: 200px;
    }
`

export const FlexProfile = styled.div`
    position: relative;
    top: 70px;
    display: inline-block;
    padding: 10px 15px 10px 15px;
    margin-top: -60px;
`

export function ProfileCards(props)
{
    return(
        <FlexProfile>
            <Card>
                <img src={props.url} alt=""></img>
                <h1>{props.name}</h1>
                <h2>Worked on: {props.work}</h2>
                <h2>Favorite recipe: {props.recipe}</h2>
            </Card>
        </FlexProfile>
    )
}