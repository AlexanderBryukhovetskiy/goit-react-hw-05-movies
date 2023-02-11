import { Outlet } from 'react-router-dom';
import MovieCard from 'components/MovieCard';
import css from './PagesStyles.module.css';
import Container from 'components/Container';
import MovieAddInfo from 'components/MovieAddInfo/MovieAddInfo';


const MovieDetails = () => {
  
  return (
    <>
      <Container>
        <button type='button' style={{ marginLeft: '20px' }} className={css.backButton}>Go back</button>

        <MovieCard/>
      
        <MovieAddInfo/>
      
        </Container>
      <Outlet className={css.add_container}/>
    </>
  );
};

export {MovieDetails};