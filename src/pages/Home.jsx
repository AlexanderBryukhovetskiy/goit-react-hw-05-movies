import { useState, useEffect } from "react";
import { fetchPopularMovies } from "components/functions";
import Loader from "components/Loader";
import { ToastContainer, toast } from 'react-toastify';


const Home = () =>{
  const [popularList, setPopularList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    const getPopularList = async () => {
      try {
        setLoading(true);

        const response = await fetchPopularMovies();

        console.log('response.data.results : ', response.data.results);

        if (response.data.results.length > 0) {

          setPopularList(...response.data.results);
        }
      
        if ( !response.data.results.length ) {
          Promise.reject(new Error(`Something wrong. Try to reload this page.`));
          return toast(`Something wrong. Try to reload this page.`);
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
  <>
      <h1>Trending today</h1> 

      { error && <h1> Something wrong. Try to reload this page.</h1> }

      { loading && <Loader/> }
      
      { popularList.length > 0 && 
      (<>
        <h2>popularList.length in RENDER:  ${popularList.length}</h2>
          <ul /*className={css.ImageGallery }*/>
            {popularList.map( ({popularListItem}) => (
              <li key={popularListItem.id}>{popularListItem.title
              }</li>))
            }
          </ul>
      </>)
      }

      <ToastContainer autoClose={3000}/> 
  </>
  );
}

export {Home};