import s from './logo.module.css';
import { BsStars } from 'react-icons/bs';

export default function Logo() {
  return (
    <div className={s.logo}>
      <span>Алена</span>
      <BsStars color="#EB6D0A" />
      <span>Твой нумеролог</span>
    </div>
  );
}
