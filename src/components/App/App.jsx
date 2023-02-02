//npm install react-router-dom
//npm i axios
//npm install react-router-dom
//npm i react-toastify

import { Routes, Route, NavLink, Link } from "react-router-dom";
// import Header from "../Header";
import Cast from "components/Cast";
import Reviews from "components/Reviews";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";



const App = () => {


  return (
    <div>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/movies' element={<Movies/>}/>
          <Route path='/movies/:movieId' element={<MovieDetails/>}/>
          <Route path='/movies/:movieId/cast' element={<Cast/>}/>
          <Route path='/movies/:movieId/reviews' element={<Reviews/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
};


export default App;