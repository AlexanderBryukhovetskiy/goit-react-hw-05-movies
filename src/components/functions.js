import axios from 'axios';

const BASE_URL='https://api.themoviedb.org/3';
const KEY = "53e87cb9c08783511c6675cb8902a46b";

export const fetchPopularMovies = async () => {
  const popularMoviesList = axios.get(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
    
  console.log(popularMoviesList);

  return popularMoviesList;
}


export const fetchMovieDetails = async (movieId) => {

  // https://api.themoviedb.org/3/movie/157336?api_key={api_key}

  const movieDetails = axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);

  console.log(movieDetails);

  return movieDetails;
}
