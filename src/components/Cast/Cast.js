
import { useState, useEffect } from 'react';
import { fetchCast } from 'components/functions';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'components/Loader';
import css from './Cast.module.css';


const Cast = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [castData, setCastData] = useState({});

  const params = useParams();
  console.log('params:', params);

  useEffect( () => {
    const getCast = async () => {
      try {
        setLoading(true);

        const response = await fetchCast(params.movieId);

        console.log('response.data.cast in Cast : ', response.data.cast);

        if ( !response ) {
          Promise.reject(new Error(`Something wrong. Try to reload this page.`));
          return toast(`Something wrong. Try to reload this page.`);
        }

        setCastData(response.data.cast);//??
      }
      catch(error) { 
        setError(error);
      }
      finally { setLoading(false) };
    }
    getCast();

    console.log('castData :', castData);

  }, [params.movieId] );

  return (

  <div>
    { error && <h1> Something wrong. Try to reload this page.</h1> }
    { loading && <Loader/>}

    <h1 className={css.castWillBeHere}>CAST will be here</h1>

    {/* <div className={css.cast}> 
      <img src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt={movieData.title || movieData.name} className={css.poster} />
            
      <div className={css.movieDetails}>
      
        <h1>{movieData.title} ({movieData.release_date?.slice(0, 4)})</h1>

        <h3>User score: {movieData.vote_average*10}%</h3>

        <h2>Overview</h2>
        <p>{movieData.overview}</p>
        
        <h3> Genres</h3>
        <ul>
        {castData?.genres?.map( genre  =><li key={genre.id}>{genre.name}</li>
          )}
        </ul>  
      </div>  
    </div> */}
    <ToastContainer autoClose={3000}/> 
  </div>
  
  );
};

export {Cast};

export default Cast;