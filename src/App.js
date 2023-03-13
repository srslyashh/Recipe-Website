import { useState } from "react";
import { Routes, Route, useSearchParams, Navigate, useNavigate, NavLink} from "react-router-dom";

import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Categories from "./pages/Categories.js"
import Search from "./pages/Search.js"
import Recipe from "./pages/Recipe.js"
import NotFound from "./pages/NotFound.js"

function App() {
  const [inputQuery, setInputQuery] = useState("")
  const [ searchParams ] = useSearchParams()
  const navigate = useNavigate();
  return (
    <>
      <div id="navBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="categories">Categories</NavLink>
        <form onSubmit={e => {
          e.preventDefault()
          navigate(`search/?q=${inputQuery}`)
          setInputQuery("")
        }}>
          <input value={inputQuery} placeholder="Search by Recipe Name..." onChange={e => setInputQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>

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
