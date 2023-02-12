import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './SearchMoviesList.module.css';

const SearchMoviesList = ({ moviesList }) => {

  return (
    <ul className={css.movieList}>
      {moviesList.map( movie => (
        <li key={movie.id} className={css.movieListItem}>
          <NavLink to={`${movie.id}`} 
          className={css.movieTitle}> {movie.title || movie.name} </NavLink>
        </li>
      ))}
    </ul>
  );
};

SearchMoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.object).isRequired,
};

export default SearchMoviesList;