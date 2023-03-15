import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Categories from "./pages/Categories.js"
import Search from "./pages/Search.js"
import Recipe from "./pages/Recipe.js"
import NotFound from "./pages/NotFound.js"

import NavBar from "./components/NavBar.js"

import './components/fonts.css'

function App() {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="home" element={<Navigate to="/"/>} />
          <Route path="about" element={<About/>} />
          <Route path="categories" element={<Categories/>} />
          <Route path="search" element={<Search/>} />
          <Route path="recipe" element={<Recipe/>} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
    </>
  );
}

export default App;