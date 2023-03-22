import styled from '@emotion/styled'
import { NavLink } from "react-router-dom"

export const FlexMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const MenuCard = styled.div`
    @media(min-width: 390px) and (max-width: 790px)
    {
        width: 300px;
        height: 150px;
        background-color: #f0f0f0;
        border: 2px solid #f0f0f0;
        border-radius: 5px;
        margin-bottom: 25px;

        img{
            width: 140px;
            height: 150px;
            object-fit: fill;
            border-radius: 5px 0px 0px 5px;
        }

        h1{
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 16px;
            position: relative;
            top: -110px;
            left: 150px;
            padding-right: 150px;
            font-size: 13px;
        }
    }
    @media(min-width: 1100px)
    {
        width: 350px;
        height: 150px;
        background-color: #f0f0f0;
        border: 2px solid #f0f0f0;
        border-radius: 5px;
        margin-bottom: 35px;
        margin-right: 25px;

        img{
            width: 140px;
            height: 150px;
            object-fit: fill;
            border-radius: 5px 0px 0px 5px;
        }

        h1{
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 16px;
            position: relative;
            top: -120px;
            left: 150px;
            padding-right: 150px;
            font-size: 15px;
        }
    }
`


export function ResultCard(props)
{
    return(
        <MenuCard>
            <img src={props.url} alt=""></img>
            <h1>{props.title}</h1>
        </MenuCard>
    )
}