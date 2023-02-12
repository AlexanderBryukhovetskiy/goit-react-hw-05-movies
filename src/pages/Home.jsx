import { useState, useEffect } from "react";
import { fetchPopularMovies } from "components/API";
import MovieList from "components/PopularMoviesList";
import Loader from "components/Loader";
import css from './PagesStyles.module.css';


const Home = () =>{
  const [popularList, setPopularList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    const getPopularList = async () => {
      try {
        setLoading(true);
        const response = await fetchPopularMovies();
        //console.log('response.data.results : ', response.data.results);

        if (response.data.results.length > 0) {
          setPopularList(response.data.results);
        }
      
        if ( !response.data.results.length ) {
          Promise.reject(new Error(`Something wrong. Try to reload this page.`));
          return <p>Something wrong. Try to reload this page</p>;
        }
      }
      catch(error) { 
        setError(error);
      }
      finally { setLoading(false) };
    }
    getPopularList();
  }, [] );

  console.log('popularList after useEffect: ' , popularList, ' , ', Date.now());

  return (
    <div className={css.HomeContainer}>
      <p className={css.movieListTitle}>Trending today</p> 

      <div>
        { error && <h1> Something wrong. Try to reload this page.</h1> }
        { loading && <Loader/> }
        
        { popularList.length > 0 && 
        <MovieList moviesList={popularList} /> }
      </div>
    </div>
  );
}

export {Home};