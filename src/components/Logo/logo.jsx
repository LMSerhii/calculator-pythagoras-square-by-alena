import clsx from 'clsx';
import s from './logo.module.css';
import { BsStars } from 'react-icons/bs';

export default function Logo({ className }) {
  const logoBuildClass = clsx(s.logo, className && className);

  return (
    <div className={logoBuildClass}>
      <span className={s.text}>Алёна</span>
      <BsStars color="#FF69B4" />
      <span className={s.text}>Твой Нумеролог</span>
    </div>
  );
}
