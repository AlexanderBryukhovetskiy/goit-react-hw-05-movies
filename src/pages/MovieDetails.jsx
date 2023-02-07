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

        // console.log('response.data.backdrop_path in MovieDetails : ', response.data.backdrop_path);

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
 
  }, [params.movieId] );

  return (

  <div>
    { error && <h1> Something wrong. Try to reload this page.</h1> }
    { loading && <Loader/>}

    <div className={css.movieCard}>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt={movieData.title || movieData.name} className={css.poster} />
            
      <div className={css.movieDetails}>
      
        <h1>{movieData.title} ({movieData.release_date?.slice(0, 4)})</h1>

        <h3>User score: {movieData.vote_average*10}%</h3>

        <h2>Overview</h2>
        <p>{movieData.overview}</p>
        
        <h3> Genres</h3>
        <ul>
        {movieData?.genres?.map( genre  =><li key={genre.id}>{genre.name}</li>
          )}
        </ul>

      </div>
    </div>
    <ToastContainer autoClose={3000}/> 
  </div>
  
  );
};

export {MovieDetails};