import css from './Header.module.css';


const Header = ({onClick}) => {
  return (
    <ul className={css.NavList}>
      <li onClick={onClick} className={css.NavItem}>Home</li>
      <li onClick={onClick} className={css.NavItem}>Movies</li>
    </ul>
  )
}

export default Header;