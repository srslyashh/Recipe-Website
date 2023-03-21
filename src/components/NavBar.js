import styled from '@emotion/styled'
import { NavLink } from "react-router-dom"

export const Navbar = styled.div`
    @media(min-width: 390px) and (max-width: 790px)
    {
        height: 40px;
        background-color: white;
        padding: 20px 30px 20px 30px;
    }

    @media(min-width: 800px)
    {
        height: 40px;
        background-color: white;
        padding: 20px 30px 20px 30px;

        button{
            padding: 2px;
            margin-left: 5px;
            padding: 4px;
            border: 0px;
            background-color: white;
        }

        input{
            font-family: 'Hepta Slab', serif;
            padding: 5px 5px 5px 5px;
            border-radius: 5px;
            border: 1px solid #fefaff;
            background-color: #f0f0f0;
        }
    }
`

export const SearchBar = styled.div`
    @media(min-width: 390px) and (max-width: 790px)
    {
        position: relative;
        margin-left: 50px;
        margin-bottom: 30px;
        margin-top: 0px;
        
        form{
            font-family: 'Cutive Mono', monospace;
            width: 80%;
        }

        button{
            padding: 3px 0px 3px 0px;
            margin-left: 5px;
            border: 0px;
            width:30px;
            font-size: 20px;
            background-color: white;
        }

        input{
            font-family: 'Hepta Slab', serif;
            padding: 10px 30px 10px 30px;
            border-radius: 5px;
            border: 1px solid #fefaff;
            background-color: #f0f0f0;
        }
    }
    @media(min-width: 800px)
    {
        position: relative;
        margin-left: 40%;
        margin-bottom: 30px;
        margin-top: -30px;
        
        form{
            font-family: 'Cutive Mono', monospace;
            width: 80%;
        }

        button{
            padding: 3px 0px 3px 0px;
            margin-left: 5px;
            border: 0px;
            width:30px;
            font-size: 20px;
            background-color: white;
        }

        input{
            font-family: 'Hepta Slab', serif;
            padding: 10px 30px 10px 30px;
            border-radius: 5px;
            border: 1px solid #fefaff;
            background-color: #f0f0f0;
        }
    }
`

export const FlexQueries = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    left: -500px;

    label{
        margin-right: 10px;
        margin-bottom:20px;
    }
`

export const NavigationLinks = styled.ul`
    @media(min-width: 390px) and (max-width: 790px)
    {
        position: relative;
        top: 15px;
        left: -45px; 

        a{
            text-decoration: none;
            color: black;
        }
        
        li{
            display: inline;
            list-style-type: none;
            color: black;
            font-family: 'Cutive Mono', monospace;
            padding: 0px 20px 0px 0px;
            font-size: 14px;
        }
    }

    @media(min-width: 800px)
    {
        position: absolute;
        right: 25px;
        top: 25px;
        padding-top: 3px;
        margin-block-start: 0px;
        margin-block-end: 0px;

        a{
            text-decoration: none;
            color: black;
        }
        
        li{
            display: inline-block;
            list-style-type: none;
            color: black;
            font-family: 'Cutive Mono', monospace;
            padding: 0px 20px 0px 0px;
        }
    }
`

export const MenuIcon = styled.div`
    @media(min-width: 390px) and (max-width: 790px)
    {
        position: absolute;
        left: 20px;
        top: 10px;

        img{
            width: 30px;
            height: 30px;
        }

        h1{
            font-family: 'Pacifico', cursive;
            font-size: 30px;
            color: #2e2e2e;
            position: absolute;
            top: -30px;
            left: 45px;
        }
    }

    @media(min-width: 800px)
    {
        position: absolute;
        left: 20px;

        img{
            width: 30px;
            height: 30px;
        }

        h1{
            font-family: 'Pacifico', cursive;
            font-size: 30px;
            color: #2e2e2e;
            position: absolute;
            top: -30px;
            left: 45px;
        }
    }
`

function NavBar() {
  return (
    <>
    <Navbar>
        <NavigationLinks>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="about">ABOUT</NavLink></li>
            <li><NavLink to="categories">CATEGORIES</NavLink></li>
            <li><NavLink to="search">SEARCH</NavLink></li>
            <li><NavLink to="recipe">RECIPE</NavLink></li>
        </NavigationLinks>
        <MenuIcon>
          <img src="/media/chef.png" alt=""></img>
          <h1>Foodie</h1>
        </MenuIcon>
    </Navbar>
    </>
  )
}

export default NavBar
