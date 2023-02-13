
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from '../components/API';
import SearchBar from "components/SearchBar";
import Loader from "components/Loader";
import SearchMoviesList from "components/SearchMoviesList";

const Movies = () =>{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect( () => { 
    console.log('searchParams in Movies.useEffect:', searchParams);

    if ( !searchParams ) {
      console.log('searchParams is empty:', searchParams);
      return
    };
    
    const getSearchList = async () => {
      try {
        console.log('searchParams inside getSearchList:', searchParams);
        
        setLoading(true);

        const response = await searchMovies(searchParams);
        console.log('response.data in Movies:' , response.data);

        if ( response.data.total_results === 0 ) {
          return <p>There are no movies by query ${searchParams}</p>;
        }

        if ( response.data.total_results > 0 ) {
          setMovieList(response.data.results);
        } 
        else {
          return Promise.reject(new Error(`There are no movies by query ${searchParams}`));
        }
      }
      catch(error) { 
        setError(error);
      }
      finally { setLoading(false) };
    }
    getSearchList(searchParams);

    console.log(movieList);

    }, [searchParams] 
  );

  const handleSubmit = (query) => {
    setMovieList( [] );
    setSearchParams( {query} );
    console.log({query});
  } 

  // console.log('searchParams after submit', searchParams);

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>

      { error && <h1> Something wrong. Try to reload this page.</h1> }
      { loading && <Loader/> }

      <SearchMoviesList moviesList={movieList} />

    </>
  );
};

export default Movies;
