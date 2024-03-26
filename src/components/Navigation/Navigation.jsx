import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={buildLinkClass}>
        Main
      </NavLink>
      <NavLink to="/contacts" className={buildLinkClass}>
        About me
      </NavLink>
    </nav>
  );
}
