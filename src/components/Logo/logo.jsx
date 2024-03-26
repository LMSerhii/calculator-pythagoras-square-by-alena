import clsx from 'clsx';
import s from './logo.module.css';
import { BsStars } from 'react-icons/bs';

export default function Logo({ className }) {
  const logoBuildClass = clsx(s.logo, className && className);

  return (
    <div className={logoBuildClass}>
      <span className={s.text}>Alyona</span>
      <BsStars color="#EB6D0A" />
      <span className={s.text}>Your numerologist</span>
    </div>
  );
}
