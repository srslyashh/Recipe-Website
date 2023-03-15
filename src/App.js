import { useState } from "react";
import { Routes, Route, useSearchParams, Navigate, useNavigate, NavLink} from "react-router-dom";
import { Navbar, SearchBar, NavigationLinks, MenuIcon } from './components/NavBar'

import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Categories from "./pages/Categories.js"
import Search from "./pages/Search.js"
import Recipe from "./pages/Recipe.js"
import NotFound from "./pages/NotFound.js"

import './components/fonts.css'

function App() {
  const [inputQuery, setInputQuery] = useState("")
  const [ searchParams ] = useSearchParams()
  const navigate = useNavigate();
  return (
    <>
      <Navbar>
        <NavigationLinks>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="about">ABOUT</NavLink></li>
          <li><NavLink to="categories">CATEGORIES</NavLink></li>
        </NavigationLinks>
        <MenuIcon>
          <img src="/media/chef.png" alt=""></img>
          <h1>Foodie</h1>
        </MenuIcon>
          <SearchBar>
            <form onSubmit={e => {
            e.preventDefault()
            navigate(`search/?q=${inputQuery}`)
            setInputQuery("")
          }}>
            <input value={inputQuery} placeholder="Search Recipe" onChange={e => setInputQuery(e.target.value)} />
            <button type="submit">&#128269;</button>
            </form>
          </SearchBar>
      </Navbar>

      <Routes>
        <Route index element={<Home/>} />
        <Route path="home" element={<Navigate to="/"/>} />
        <Route path="about" element={<About/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="search" element={<Search query={searchParams.get("q")}/>} />
        <Route path="recipe" element={<Recipe/>} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </>  
  );
}

export default App;
