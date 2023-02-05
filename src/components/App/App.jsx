//npm install react-router-dom
//npm i axios
//npm install react-router-dom
//npm i react-toastify
//npm i react-loader-spinner

import { Routes, Route} from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types';
import css from './App.module.css';
import Cast from "components/Cast";
import Reviews from "components/Reviews";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import { NotFoundPage } from "pages/NotFoundPage";

import Layout from 'components/Layout';

const App = () => {
  const [movieId, setMovieId] = useState(null);

  const handleMovieChoose = (movie) => {
    console.log('movie in App : ', movie)

    setMovieId(movie.id);
  }

  return (
    <>
      <Routes className={css.container}>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home onClick={handleMovieChoose}/>}/>
          <Route path ='movies' element={<Movies/>}/>
          <Route path='movies/:movieId' element={<MovieDetails movieId={movieId}/>}/>
          <Route path='movies/:movieId/cast' element={<Cast/>}/>
          <Route path='movies/:movieId/reviews' element={<Reviews/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
};

App.protoTypes = {
  movie: PropTypes.object,
};


export default App;