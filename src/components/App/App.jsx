//npm install react-router-dom
//npm i axios
//npm install react-router-dom
//npm i react-loader-spinner

import { Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import css from './App.module.css';

const Loader = lazy(() => import("components/Loader"));
const Layout = lazy(() => import('components/Layout'));
const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"));

const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
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
    </Suspense>
  );
};

export default App;