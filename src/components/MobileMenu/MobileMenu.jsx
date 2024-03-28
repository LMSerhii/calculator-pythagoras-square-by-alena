import Backdrop from '../Backdrop/Backdrop';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import s from './MobileMenu.module.css';

export default function MobileMenu({ isShow, setIsShow }) {
  return (
    <div className={s.wrapper}>
      {isShow && <NavigationMobile />}
      <Backdrop show={isShow} onClick={setIsShow} />
    </div>
  );
}
