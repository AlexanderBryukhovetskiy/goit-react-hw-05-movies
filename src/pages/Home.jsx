import { useState, useEffect } from "react";
import { fetchPopularMovies } from "components/functions";
// import Loader from "components/Loader";
import { ToastContainer, toast } from 'react-toastify';
// import css from ???;

const Home = () =>{
  const [popularList, setPopularList] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect( () => {
    const getPopularList = async () => {
      try {
        // setLoading(true);

        const response = await fetchPopularMovies();

        setPopularList(...response.data.results);

        console.log(response.data.results);
      
        if ( !response.data.results.length ) {
          Promise.reject(new Error(`Something wrong. Try to reload this page.`));
          return toast(`Something wrong. Try to reload this page.`);
        }
      }
      catch(error) { 
        setError(error);
      }
      // finally { setLoading(false) };
    }

    getPopularList();
    }
  );
  
  return (
  <>
      <h1>Trending today</h1> 

      { error && <h1> Something wrong. Try to reload this page.</h1> }

      {/* { loading && <Loader/> } */}
      
      { popularList.length > 0 && 
          <ul /*className={css.ImageGallery }*/>
            {popularList.map( popularListItem => (
              <li key={popularListItem.id}>{popularListItem.original_title
              }</li>))
            }
          </ul>
      }

      <ToastContainer autoClose={3000}/> 
  </>
  );
}

export {Home};