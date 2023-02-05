import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'components/functions';
// import { toast, Toastcontainer } from 'react-toastify';
// import css from './PagesStyles.module.css';

const MovieDetails = (movieId) => {
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect( () => {
    const getMovieDetails = async () => {
      try {
        // setLoading(true);
        const response = await fetchMovieDetails(movieId);
        console.log('response in MovieDetails : ', response);

        // if (response.data.results.length > 0) {
        //   setPopularList(response.data.results);
        // }
      
        // if ( !response.data.results.length ) {
        //   Promise.reject(new Error(`Something wrong. Try to reload this page.`));
        //   return toast(`Something wrong. Try to reload this page.`);
        // }
      }
      catch(error) { 
        setError(error);
      }
      // finally { setLoading(false) };
    }
    getMovieDetails();
  }, [movieId] );

  return (<>
  <p> /*MovieDetails will be here*/</p>

  <div>
    { error && <h1> Something wrong. Try to reload this page.</h1> }

    {/* <img src={movie.} alt={}/>
    <ul className={}>
      <li>Title</li>
      <li>Overview</li>
      <li>Genre</li>
    </ul> */}
  </div>
  
  </>)
}

export {MovieDetails};