import { NavLink } from "react-router-dom";
import css from './MovieAddInfo.module.css';

const MovieAddInfo = () => {
  return ( 
    <div className={css.addInfoContainer}>
        <h1 className={css.addInfoTitle}>Additional information</h1>
        <ul className={css.addList}>
          <li className={css.addListItem}>
            <NavLink className={css.addLink} to="cast">Cast</NavLink>
          </li>
          <li className={css.addListItem}>
            <NavLink className={css.addLink} to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
  );
};

export default MovieAddInfo;