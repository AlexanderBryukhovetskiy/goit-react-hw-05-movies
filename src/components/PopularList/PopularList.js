import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './PopularList.module.css';

const PopularList = ({ movieList }) => {

  return (
    <ul className={css.popularList}>
      {movieList.map( movie => (
        <li key={movie.id} >
          <NavLink to={`movies/${movie.id}`} 
          className={css.MovieTitle}> {movie.title || movie.name} </NavLink>
        </li>
      ))}
    </ul>
  );
};

PopularList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.object).isRequired,
};

export default PopularList;