import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Categories from "./pages/Categories.js"
import Search from "./pages/Search.js"
import Recipe from "./pages/Recipe.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="search" element={<Search/>} />
        <Route path="recipe" element={<Recipe/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
