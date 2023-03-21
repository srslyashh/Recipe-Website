import styled from '@emotion/styled'

const Card = styled.div`
    @media(min-width: 390px) and (max-width: 790px)
    {
        width: 300px;
        height: 150px;
        background-color: #f0f0f0;
        border: 2px solid #f0f0f0;
        border-radius: 5px;
        margin-bottom: 20px;
        margin-top: -85px;

        img{
            width: 130px;
            height: 150px;
            border-radius: 5px 0px 0px 5px;
        }

        h1{
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 16px;
            position: relative;
            top: -155px;
            left: 150px;
        }

        h2{
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 12px;
            position: relative;
            top: -150px;
            left: 150px;
        }
    }
    @media(min-width: 800px)
    {
        width: 500px;
        height: 200px;
        background-color: #f0f0f0;
        border: 2px solid #f0f0f0;
        border-radius: 5px;
        margin-top: -70px;

        img{
            width: 180px;
            height: 200px;
            border-radius: 5px 0px 0px 5px;
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
            font-size: 15px;
            position: relative;
            top: -190px;
            left: 200px;
        }
    }
`

export const FlexProfile = styled.div`
    position: relative;
    top: 70px;
    display: inline-block;
    padding: 10px 15px 10px 15px;

    @media(min-width: 800px)
    {
        margin-top: -70px;
        top: 150px;
        left: 50px;
    }
`

export function ProfileCards(props)
{
    return(
        <FlexProfile>
            <Card>
                <img src={props.url} alt=""></img>
                <h1>{props.name}</h1>
                <h2>Worked on:</h2>
                <h2>{props.work}</h2>
                <h2>Favorite recipe:</h2>
                <h2>{props.recipe}</h2>
            </Card>
        </FlexProfile>
    )
}