import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './PopularMoviesList.module.css';

const PopularMoviesList = ({ moviesList }) => {

  return (
    <ul className={css.movieList}>
      {moviesList.map( movie => (
        <li key={movie.id} className={css.movieListItem}>
          <NavLink to={`movies/${movie.id}`} 
          className={css.movieTitle}> {movie.title || movie.name} </NavLink>
        </li>
      ))}
    </ul>
  );
};

PopularMoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.object).isRequired,
};

export default PopularMoviesList;