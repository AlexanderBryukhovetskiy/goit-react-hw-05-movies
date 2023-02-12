import axios from 'axios';

const BASE_URL='https://api.themoviedb.org/3';
const KEY = "53e87cb9c08783511c6675cb8902a46b";


export const fetchPopularMovies = async () => {
  const popularMoviesList = axios.get(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
    
  console.log(popularMoviesList);

  return popularMoviesList;
}

export const fetchMovieDetails = async (movieId) => {
  const movieDetails = axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);

  console.log(movieDetails);

  return movieDetails;
}

export const fetchCast = async (movieId) => {
  const castData = axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`);

  console.log(castData);

  return castData;
}


export const fetchReviews = async (movieId) => {
  const movieReviews = axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`);

  console.log(movieReviews);

  return movieReviews;
}

export const searchMovies = async (searchName) => {

  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>

  const searchMovieList = axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&query=${searchName}`);

  console.log(searchMovieList);

  return searchMovieList;
}