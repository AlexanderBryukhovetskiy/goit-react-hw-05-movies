import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';


const Layout = () => {
  return (
    <>
    <header className={css.container}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
    </header>

    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default Layout;