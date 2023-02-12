import { useState, useEffect } from 'react';
import { fetchReviews } from 'components/API';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'components/Loader';
import css from "./Reviews.module.css";


const Reviews = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);

  const params = useParams();
  console.log('params:', params);

  useEffect( () => {
    const getReviews = async () => {
      try {
        setLoading(true);

        const response = await fetchReviews(params.movieId);

        console.log('response.data.results in Reviews : ', response.data);

        if ( !response ) {
          Promise.reject(new Error(`Something wrong. Try to reload this page.`));
          return toast(`Something wrong. Try to reload this page.`);
        }

        setReviewsData(response.data);
      }
      catch(error) { 
        setError(error);
      }
      finally { setLoading(false) };
    }
    getReviews();

    console.log('reviewsData :', reviewsData);

  }, [params.movieId] );


  return (
    
  <div className={css.reviewsContainer}>

    { error && <h1> Something wrong. Try to reload this page.</h1> }
    { loading && <Loader/>}

    {reviewsData?.results?.length === 0 &&
    <h1 className={css.noReviewsMessage}>Sorry, this movie has not any review </h1>}

    {reviewsData?.results?.length > 0 &&
    <ul className={css.reviewsList}>
      {reviewsData?.results?.map( review  =>
        <li key={review.id} className={css.review}>
          <h2 className={css.reviewAuthor}>Author: {review.author}</h2>
          <p className={css.reviewContent}>{review.content}</p>
      </li>
      )}
    </ul> } 

    <ToastContainer autoClose={3000}/> 
  </div>
  );
};

export default Reviews;