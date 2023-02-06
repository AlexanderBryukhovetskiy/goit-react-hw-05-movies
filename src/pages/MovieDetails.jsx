import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'components/functions';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'components/Loader';
import css from './PagesStyles.module.css';


const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState({});

  const params = useParams();
  console.log('params:', params);

  useEffect( () => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);

        const response = await fetchMovieDetails(params.movieId);
        console.log('response.data.backdrop_path in MovieDetails : ', response.data.backdrop_path);

        if ( !response ) {
          Promise.reject(new Error(`Something wrong. Try to reload this page.`));
          return toast(`Something wrong. Try to reload this page.`);
        }

        setMovieData(response.data);
      }
      catch(error) { 
        setError(error);
      }
      finally { setLoading(false) };
    }
    getMovieDetails();
    console.log('movieData :', movieData);
    // console.log('movieData.release_date :', movieData.release_date);
  }, [params.movieId] );

  // const releaseYear = movieData.release_date.getFullYear();
  // console.log('releaseYear :', releaseYear);

  return (

  <div>
    { error && <h1> Something wrong. Try to reload this page.</h1> }
    { loading && <Loader/>}

    <div className={css.movieCard}>
      <img src={'movieData.backdrop_path'} alt={movieData.title || movieData.name} className={css.poster} />
            
      <div className={css.movieDetails}>
      
          <h1>{movieData.title} ({movieData.release_date})</h1>
          <h3>User score: {movieData.vote_average*10}%</h3>
          <p>{movieData.overview}</p>
          <p> Genres</p>
          {/* <ul>
          {movieData.genres.map(....)}
          </ul> */}
   
       
      </div>
    </div>
    <ToastContainer autoClose={3000}/> 
  </div>
  
  );
};

export {MovieDetails};