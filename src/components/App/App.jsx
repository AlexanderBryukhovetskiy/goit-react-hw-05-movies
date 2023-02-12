//npm install react-router-dom
//npm i axios
//npm install react-router-dom
//npm i react-toastify
//npm i react-loader-spinner

import { Routes, Route} from "react-router-dom";
// import { useState } from "react";
import PropTypes from 'prop-types';

import Cast from "components/Cast";
import Reviews from "components/Reviews";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import css from './App.module.css';

import Layout from 'components/Layout';

const App = () => {

  return (
    <>
      <Routes className={css.container}>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path ='movies' element={<Movies/>}/>
          
          <Route path='movies/:movieId' element={<MovieDetails/>}>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path='*' element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
};

App.protoTypes = {
  movie: PropTypes.object,
};


export default App;