import s from './logo.module.css';
import { BsStars } from 'react-icons/bs';

export default function Logo() {
  return (
    <div className={s.logo}>
      <span className={s.text}>Алена</span>
      <BsStars color="#EB6D0A" />
      <span className={s.text}>Твой нумеролог</span>
    </div>
  );
}
