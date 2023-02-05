import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './PopularList.module.css';

const PopularList = ({list}) => {
  return (
    <ul className={css.popularList}>
      {list.map( listItem => (
        <li key={listItem.id}>
          <NavLink to='movies/:movieId' className={css.MovieTitle}>
          {listItem.title || listItem.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

PopularList.propTypes={
  list: PropTypes.arrayOf(
    PropTypes.object).isRequired,
};

export default PopularList;