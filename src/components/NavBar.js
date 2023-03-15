import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="categories">Categories</NavLink>
      <NavLink to="search">Serch</NavLink>
      <NavLink to="recipe">Recipe</NavLink>
    </>
  )
}

export default NavBar
