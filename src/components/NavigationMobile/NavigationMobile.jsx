import clsx from 'clsx';
import s from './NavigationMobile.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function NavigationMobile() {
  return (
    <nav className={s.navigation}>
      <NavLink to="/" className={buildLinkClass}>
        Главная
      </NavLink>
      <NavLink to="/contacts" className={buildLinkClass}>
        Контакты
      </NavLink>
    </nav>
  );
}
