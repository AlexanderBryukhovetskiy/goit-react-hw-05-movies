// import SearchBar from '..components/SearchBar';
// import { useState, useEffect } from "react";

const Movies = () =>{
  // const [searchName, setSearchName] = useState('');

  //----------------------searching movies by searchName--------------------
  // useEffect( () => { 
  //   //fetchSearchMovies();   -  write this function!!!!

  //   const getSearchList = async () => {
  //     try {
  //       // setLoading(true);

  //       const response = await fetchSearchMovies(searchName);
  //       // setTotalImages(response.data.totalHits);
      
  //       if ( response.data.totalHits === 0 ) {
  //         return toast(`There are no pictures by word ${searchName}`);
  //       }

  //       if (response.data.totalHits > 0 ) {
  //         setImageList((prevList) => [...prevList, ...response.data.hits]);
  //       } 
  //       else {
  //         return Promise.reject(new Error(`There are no pictures by word ${searchName}`));
  //       }
  //     }
  //     catch(error) { 
  //       setError(error);
  //     }
  //     finally { setLoading(false) };
  //   }
  //   getSearchList();
  //   }
  // );
//------------------------------------------------------------------------------
  
    return (
      <>
          <>
          {/* <h1>Trending today</h1>  */}

          {/* { error && <h1> Something wrong. Try to reload this page.</h1> } */}

          {/* { loading && <Loader/> } */}


          
          {/* { !imageList.length && !loading && <p className={css.serviceMessage}>Please enter search word</p> }  */}
        

          {/* { popularList.length > 0 && 
            <div>
              <ImageGallery imageList={imageList}/> 

              { loading && <Loader/> }

              { imageList.length > 0 
                && imageList.length < 500
                && imageList.length < totalImages 
                && <Button onClick={loadMore}/>
              }
            </div>
          } */}

          {/* <ToastContainer autoClose={3000}/>  */}

      </>

      {/* <SearchBar> */}
        <h1>Search Movies List will be here</h1>
        <ul>
          <li></li>
        </ul>
      </>
  );
};

export {Movies};
