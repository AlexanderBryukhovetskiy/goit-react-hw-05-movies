
import { useState, useEffect } from "react";
import { searchMovies } from '../components/API';
import SearchBar from "components/SearchBar";
import Loader from "components/Loader";
import SearchMoviesList from "components/SearchMoviesList";

const Movies = () =>{
  const [searchName, setSearchName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState([]);

  useEffect( () => { 
    console.log('searchName in useEffect:', searchName);

    if ( !searchName ) {
      return
    };
    
    const getSearchList = async () => {
      try {
        console.log('searchName inside getSearchList:', searchName);
        setLoading(true);

        const response = await searchMovies(searchName);
        console.log('response.data in Movies:' , response.data);

        if ( response.data.total_results === 0 ) {
          return <p>There are no movies by word ${searchName}</p>;
        }

        if ( response.data.total_results > 0 ) {
          setMovieList(response.data.results);
        } 
        else {
          return Promise.reject(new Error(`There are no pictures by word ${searchName}`));
        }
      }
      catch(error) { 
        setError(error);
      }
      finally { setLoading(false) };
    }
    getSearchList();
    // console.log(movieList);

    }, [searchName] 
  );

  const handleSubmit = (searchName) => {
    setMovieList( [] );
    setSearchName(searchName);
  } 

  return (
    <>
      {!movieList.length && <SearchBar onSubmit={handleSubmit}/>}

      { error && <h1> Something wrong. Try to reload this page.</h1> }
      { loading && <Loader/> }

      { movieList.length > 0 && <SearchMoviesList moviesList={movieList} />}

    </>
  );
};

export {Movies};
