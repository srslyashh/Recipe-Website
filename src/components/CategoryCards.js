import styled from '@emotion/styled'
import { NavLink} from "react-router-dom";

const Card = styled.div`
    @media(min-width: 390px) and (max-width: 790px)
    {    
        width: 300px;
        height: 115 px;
        background-color: #f0f0f0;
        border: 2px solid #f0f0f0;
        border-radius: 5px;
        margin-bottom: 20px;

        img{
            width: 156px;
            height: 115px;
            border-radius: 5px 0px 0px 5px;
        }

        h1{
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 16px;
            position: relative;
            top: -80px;
            left: 190px;
            padding-right: 150px;
        }
    }
    @media(min-width: 800px)
    {
        width: 300px;
        height: 115px;
        background-color: #f0f0f0;
        border: 2px solid #f0f0f0;
        border-radius: 5px;

        img{
            width: 156px;
            height: 115px;
            border-radius: 5px 0px 0px 5px;
        }

        h1{
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 13px;
            position: relative;
            top: -80px;
            left: 180px;
            padding-right: 150px;
        }
    }
`

export const FlexCategory = styled.div`
    position: relative;
    display: inline-block;
    padding: 10px 10px 5px 5px;
    
    a, a:hover, a:visited, a:active {
        color: inherit;
        text-decoration: none;
    }
   
`

export function CategoryCards(props)
{
    return(
        <FlexCategory>
            <NavLink to={`/search/?cuisine=${props.name}`}>
                <Card>
                    <img src={props.url} alt=""></img>
                    <h1>{props.name}</h1>
                </Card>
            </NavLink>
        </FlexCategory>
    )
}
