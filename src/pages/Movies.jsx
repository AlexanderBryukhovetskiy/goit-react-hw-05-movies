
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from '../components/API';
import SearchBar from "components/SearchBar";
import Loader from "components/Loader";
import SearchMoviesList from "components/SearchMoviesList";
import css from './PagesStyles.module.css';

const Movies = () =>{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect( () => { 

    const query= searchParams.get('query'); 
    // console.log(query);
    if ( !query ) {
      console.log('There is no query in searchParams');
      return
    };
    
    const getSearchList = async () => {
      // console.log('query inside getSearchList before try:', query);
      try {
        setLoading(true);

        const response = await searchMovies(query);
        console.log('response.data in Movies :' , response.data);

        if ( response.data.total_results === 0 ) {
          return <p>There are no movies by query ${query}</p>;
        }

        if ( response.data.total_results > 0 ) {
          setMovieList(response.data.results);
        } 
        else {
          return Promise.reject(new Error(`There are no movies by query ${query}`));
        }
      }
      catch(error) { 
        setError(error);
      }
      finally { setLoading(false) };
    }
    getSearchList();

    }, [searchParams] 
  );

  const handleSubmit = (query) => {
    setMovieList( [] );
    setSearchParams( {query} );
    console.log({query});
  } 

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>

      { error && <h1 className={css.errorMessage}> Something wrong. Try to reload this page.</h1> }
      { loading && <Loader/> }

      <SearchMoviesList moviesList={movieList} />
    </>
  );
};

export default Movies;
