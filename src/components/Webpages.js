import styled from '@emotion/styled'
import { NavLink} from "react-router-dom";

const BannerHome = styled.div`
    position: relative;
    top: 0px;

    img{
        height: 100%;
        width: 100%;
        object-fit: fill;
    }

    h1{
        position: absolute;
        top: -10px;
        right: 40px;
        font-family: 'Titan One', cursive;
        color: #cc6343;
        font-size: 100px;
    }

    h2{
        position: absolute;
        top: 75px;
        right: 40px;
        font-family: 'Titan One', cursive;
        color: #cc6343;
        font-size: 100px;
    }

    h3{
        position: absolute;
        top: 180px;
        right: 40px;
        font-family: 'Titan One', cursive;
        color: #cc6343;
        font-size: 95px;
    }

    h4{
        position: absolute;
        top: 250px;
        right: 40px;
        font-family: 'Titan One', cursive;
        color: #cc6343;
        font-size: 95px;
    }
`

export const BannerButton = styled.button`
    padding: 0px 15px 0px 15px;
    border : 1px solid #e8c182;
    background-color: #e8c182;
    border-radius: 5px;
    position: absolute;
    top: 80%;
    margin-left: 46%;

    &:hover{
        background-color: #e8c182;
    }

    a{
        text-decoration: none;
        font-family: 'Hepta Slab', serif;
        color: #262626;
        font-size: 14px;
    }
`

const NormalHeader = styled.div`
    position: relative;
    top: 0px;

    img{
        height: 500px;
        width: 100%;
        object-fit: fill;
    }

    h1{
        position: absolute;
        top: 370px;
        right: 40px;
        font-family: 'Hepta Slab', serif;
        color: white;
        font-size: 50px;
    }
`

/*
    Gives margin to each page.
*/
export const ContentContainer = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
`

/*
    Params:
    @@ url : string 
    @@ page : link to a page 
    @@ buttonText: Adding a text to the button
*/
export function Banner(props)
{
    if(props.home)
    {
        return(
            <div>
                <BannerHome>
                    <img src={props.url} alt=""></img>
                    <h1>FOOD HAS</h1>
                    <h2>NEVER</h2>
                    <h3>BEEN SO</h3>
                    <h4>TASTY</h4>
                </BannerHome>
                <BannerButton>
                    <h3><NavLink to={props.page}>{props.buttonText}</NavLink></h3>
                </BannerButton>
            </div>
        )
    }
    else
    {
        return(
            <NormalHeader>
                <img src={props.url} alt=""></img>
                <h1>{props.title}</h1>
            </NormalHeader>
        )
    }
}
