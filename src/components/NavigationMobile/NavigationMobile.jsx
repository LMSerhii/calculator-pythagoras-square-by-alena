import { RxHamburgerMenu } from 'react-icons/rx';
import s from './NavigationMobile.module.css';

export default function NavigationMobile() {
  const handleClick = () => {
    console.log('open');
  };

  return (
    <nav className={s.navigation}>
      <RxHamburgerMenu size={40} onClick={handleClick} />
    </nav>
  );
}
