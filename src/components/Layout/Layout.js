import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';


const Layout = () => {
  return (
    <>
    <header className={css.container}>
        <NavLink className={css.headerLink} to='/'>Home</NavLink>
        <NavLink className={css.headerLink} to='/movies'>Movies</NavLink>
    </header>

    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default Layout;