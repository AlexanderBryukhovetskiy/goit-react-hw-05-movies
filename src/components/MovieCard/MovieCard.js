import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'components/functions';
import { useParams } from 'react-router-dom';
import Container from 'components/Container';
import Loader from 'components/Loader';
import css from './MovieCard.module.css';


const MovieCard = () =>{
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

    //console.log('movieData :', movieData);
 
  }, [params.movieId] );  

  return ( 
    <Container>
      
      { error && <h1> Something wrong. Try to reload this page.</h1> }
      { loading && <Loader/>}

      <div className={css.movieCard}>
        <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title || movieData.name} />
                
        <div className={css.movieDetails}>
          <h1 className={css.MovieTitle}>{movieData.title} ({movieData.release_date?.slice(0, 4)})</h1>

          <h2 className={css.userScore}>User score: {Math.round(movieData.vote_average*10)}%</h2>

          <h2 className={css.overview}>Overview</h2>
          <p>{movieData.overview}</p>
          
          <h3> Genres</h3>
          <ul className={css.genreList}>
          {movieData?.genres?.map( genre =><li key={genre.id} className={css.genreItem}>{genre.name}</li>
          )}
          </ul>
        </div>
        <ToastContainer autoClose={3000}/> 
      </div>
    </Container>
  );
};

export default MovieCard;