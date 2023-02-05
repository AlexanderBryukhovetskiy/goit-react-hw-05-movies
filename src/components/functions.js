import axios from 'axios';


// `https://api.themoviedb.org/3/movie/550?api_key=${KEY}`;

const KEY = "53e87cb9c08783511c6675cb8902a46b";

export const fetchPopularMovies = async () => {

  const popularMoviesList = axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`);

  console.log(popularMoviesList);

  return popularMoviesList;
}



// export const fetchSearchMovies = async (searchName) => {

//   console.log('This is a searchName in function "fetchSearchMovies" : ', searchName);

//   const response = await axios.get(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);

//   return response;
// }
