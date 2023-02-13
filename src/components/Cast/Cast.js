import { useState, useEffect } from 'react';
import { fetchCast } from 'components/API';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import NoCastPhoto from 'components/NoCastPhoto';
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

        console.log('response.data in Cast : ', response.data);

        if ( !response ) {
          Promise.reject(new Error(`Something wrong. Try to reload this page.`));
          return <p>Something wrong. Try to reload this page.</p>;
        }

        setCastData(response.data);//??
      }
      catch(error) { 
        setError(error);
      }
      finally { setLoading(false) };
    }
    getCast();
  }, [params.movieId]
  );

  return (

  <div>
    { error && <h1> Something wrong. Try to reload this page.</h1> }
    { loading && <Loader/>}

    <div className={css.castContainer}> 
        <ul>
        {castData?.cast?.map( actor  =>
          <li key={actor.cast_id} className={css.actor}>
              <img src={ actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : NoCastPhoto}
                alt={`There is no photo`} 
                className={css.actorPhoto}/>
              <p className={css.actorInfo}>{actor.name}</p>
              <p className={css.actorInfo}>Character: {actor.character}</p>
          </li>
          )}
        </ul>  
    </div>
  </div>
  
  );
};

export {Cast};

export default Cast;