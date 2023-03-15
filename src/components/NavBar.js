import styled from '@emotion/styled'

export const Navbar = styled.div`
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
`

export const SearchBar = styled.div`
    position: absolute;
    top: 24px;
    right: 30px;
    
    form{
        font-family: 'Cutive Mono', monospace;
    }
`

export const NavigationLinks = styled.ul`
    position: absolute;
    right: 230px;
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
`

export const MenuIcon = styled.div`
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
`