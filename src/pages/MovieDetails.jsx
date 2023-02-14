import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

import Container from 'components/Container';
import MovieCard from 'components/MovieCard';
import MovieAddInfo from 'components/MovieAddInfo/MovieAddInfo';
import css from './PagesStyles.module.css';
import '../index.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "movies";

  return (
    <>
      <Container>
        {/* -------------------------------------  */}
      {/* НЕ ПРАЦЮЮТЬ СТИЛІ ЛІНКА ПОВЕРНЕННЯ НА ПОПЕРЕДНЮ СТОРІНКУ */}
        <NavLink to={backLinkHref} className={css.backLink}>Go back</NavLink>

        <button type='button' style={{ marginLeft: '20px' }} className={css.backButton}>
          <Link to={backLinkHref} className={css.backLink}>Go back</Link>
        </button>
      {/* --------------------------------------  */}

        <MovieCard/>
      
        <MovieAddInfo/>
      
      </Container>

      <Outlet className={css.add_container}/>
    </>
  );
};

export default MovieDetails;