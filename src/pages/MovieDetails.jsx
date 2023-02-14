import { NavLink, Outlet, useLocation } from 'react-router-dom';

import Container from 'components/Container';
import MovieCard from 'components/MovieCard';
import MovieAddInfo from 'components/MovieAddInfo/MovieAddInfo';
import css from './PagesStyles.module.css';



const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "movies";

  return (
    <>
      <Container>

        <div >
          <NavLink to={backLinkHref} className={css.backLink}>Go back</NavLink>
        </div>

        <MovieCard/>
      
        <MovieAddInfo/>
      
      </Container>

      <Outlet/>
    </>
  );
};

export default MovieDetails;