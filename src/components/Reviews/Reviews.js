import { useState, useEffect } from 'react';
import { fetchReviews } from 'components/API';
import { useParams } from 'react-router-dom';
// import Loader from 'components/Loader';
import css from "./Reviews.module.css";


const Reviews = () => {
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);

  const params = useParams();
  console.log('params:', params);

  useEffect( () => {
    const getReviews = async () => {
      try {
        // setLoading(true);

        const response = await fetchReviews(params.movieId);

        console.log('response.data.results in Reviews : ', response.data);

        if ( !response ) {
          Promise.reject(new Error(`Something wrong. Try to reload this page.`));
          return <p className={css.errorMessage}>Something wrong. Try to reload this page.</p>;
        }

        setReviewsData(response.data);
      }
      catch(error) { 
        setError(error);
      }
      finally { 
        // setLoading(false) 
      };
    }
    getReviews();

    console.log('reviewsData :', reviewsData);

  }, [params.movieId] );


  return (
    
  <div className={css.reviewsContainer}>

    { error && <h1 className={css.errorMessage}> Something wrong. Try to reload this page.</h1> }
    {/* { loading && <Loader/>} */}

    {reviewsData?.results?.length === 0 &&
    <h1 className={css.noReviewsMessage}>Sorry, this movie has not any review </h1>}

    {reviewsData?.results?.length > 0 &&
    <ul className={css.reviewsList}>
      {reviewsData?.results?.map( review  =>
        <li key={review.id} className={css.reviewListItem}>
          <h2 className={css.reviewAuthor}>Author: {review.author}</h2>
          <p className={css.reviewContext}>{review.content}</p>
      </li>
      )}
    </ul> } 
  </div>
  );
};

export default Reviews;