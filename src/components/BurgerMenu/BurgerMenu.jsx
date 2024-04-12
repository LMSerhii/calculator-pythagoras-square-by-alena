import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import s from './BurgerMenu.module.css';

export default function BurgerMenu({ isShow, setIsShow }) {
  return (
    <button className={s.burgerMenu} onClick={setIsShow}>
      {isShow ? <IoCloseOutline size={30} /> : <RxHamburgerMenu size={30} />}
    </button>
  );
}
