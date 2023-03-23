import styled from '@emotion/styled'
import { NavLink} from "react-router-dom";

const BannerHome = styled.div`

    @media(min-width: 800px)
    {
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
    }

    @media(min-width: 390px) and (max-width: 790px)
    {
        margin-bottom: -80px;
        img{
            content: url("./media/home_mobile.jpg");
            height: 770px;
            width: 100%;
            object-fit: fill;
        }

        h1{
            position: absolute;
            top: 70px;
            right: 30px;
            font-family: 'Titan One', cursive;
            color: #cc6343;
            font-size: 60px;
        }

        h2{
            position: absolute;
            top: 110px;
            right: 30px;
            font-family: 'Titan One', cursive;
            color: #cc6343;
            font-size: 60px;
        }

        h3{
            position: absolute;
            top: 150px;
            right: 30px;
            font-family: 'Titan One', cursive;
            color: #cc6343;
            font-size:60px;
        }

        h4{
            position: absolute;
            top: 180px;
            right: 30px;
            font-family: 'Titan One', cursive;
            color: #cc6343;
            font-size:60px;
        }
    }
`

export const BannerButton = styled.button`
    padding: 0px 15px 0px 15px;
    border : 1px solid #e8c182;
    background-color: #e8c182;
    border-radius: 5px;

    &:hover{
        background-color: #e8c182;
    }

    a{
        text-decoration: none;
        font-family: 'Hepta Slab', serif;
        color: #262626;
        font-size: 14px;
    }


    @media(min-width: 800px)
    {
        position: absolute;
        top: 80%;
        margin-left: 46%;
    }

    @media(min-width: 390px) and (max-width: 790px)
    {
        padding: 0px 5px 0px 5px;
        border : 1px solid #e8c182;
        background-color: #e8c182;
        border-radius: 5px;

        position: relative;
        top: -45px;
        left: 130px;
    }
`

const NormalHeader = styled.div`
    @media(min-width: 390px) and (max-width: 790px)
    {
        position: relative;
        top: 0px;

        img{
            height: 200px;
            width: 100%;
            object-fit: fill;
        }

        h1{
            position: absolute;
            top: 130px;
            right: 10px;
            font-family: 'Hepta Slab', serif;
            color: white;
            font-size: 30px;
        }
    }

    @media(min-width: 800px)
    {
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
    }
`

const RecipeHeader = styled.div`
    ${'' /* background-image: ${props => props.image}; */}
    @media(min-width: 390px) and (max-width: 799px)
    {
        position: relative;
        top: 0px;
        background: #F8DE7F;
        overflow: visible;
        img{
            width: 100%;
            align: center;
            object-fit: fill;
        }

        h1{
            position: relative;
            text-align: center;
            vertical-align: baseline;
            font-family: 'Hepta Slab', serif;
            color: black;
            font-size: 30px;
        }
        .bottomRow{
            display: flex;
            width: 100%;
            justify-content: center;
        }
        .box{
            display: inline-block;
            margin: 10px
        }
        h2{
            text-align: center;
            vertical-align: baseline;
            font-family: 'Hepta Slab', serif;
            color: black;
            font-size: 20px;
        }
        h3{
            display: none;
        }
        
        
    }

    @media(min-width: 800px)
    {
        position: relative;
        top: 0px;
        background: #F8DE7F;

        img{
            height: 400px;
            width: 100%;
            object-fit: fill;
        }

        h1{
            position: relative;
            text-align: center;
            vertical-align: baseline;
            font-family: 'Hepta Slab', serif;
            color: black;
            font-size: 30px;
        }
        .bottomRow{
            display: flex;
            width: 100%;
            justify-content: center;
        }
        .box{
            display: inline-block;
            margin: 10px
        }
        h2{
            text-align: center;
            vertical-align: baseline;
            font-family: 'Hepta Slab', serif;
            color: black;
            font-size: 20px;
        }
        h3{
            text-align: center;
            vertical-align: baseline;
            font-family: 'Hepta Slab', serif;
            color: black;
            font-size: 20px;
        }
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
    } else if(props.recipe) {
        return(
            <RecipeHeader>
                <img src={props.recipe.image} alt={props.recipe.title}/>
                <div className='topRow'>
                    <h1>{props.recipe.title}</h1>
                </div>
                <div className='bottomRow'>
                    <div className="box">
                        <h2>Author: {props.recipe.sourceName}</h2>
                    </div>
                    <div className="box">
                        <h3>Health Score: {props.recipe.healthScore}</h3>
                    </div>
                    <div className="box">
                        <h2>Servings: {props.recipe.servings}</h2>
                    </div> 
                </div>
            </RecipeHeader>
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
