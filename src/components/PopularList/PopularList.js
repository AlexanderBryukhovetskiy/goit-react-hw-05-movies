import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './PopularList.module.css';

const PopularList = ({ movieList }, handleMovieChoose ) => {

  const handleClick = (movie) => {
    
    console.log(movie)
    // handleMovieChoose(movie);
  }

  return (
    <ul className={css.popularList}>
      {movieList.map( movie => (
        <li key={movie.id} >
          <NavLink to='movies/:movieId' onClick={handleClick} className={css.MovieTitle}> {movie.title || movie.name} </NavLink>
        </li>
      ))}
    </ul>
  );
};

PopularList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.object).isRequired,
  handleMovieChoose: PropTypes.func,
};

export default PopularList;