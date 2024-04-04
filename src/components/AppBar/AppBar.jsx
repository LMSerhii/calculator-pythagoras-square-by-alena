import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Header from '../Header/Header';
import SocialIcons from '../SocialIcons/SocialIcons';
import Container from '../Container/Container';
import s from './AppBar.module.css';
import Logo from '../Logo/logo';
import clsx from 'clsx';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function AppBar() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mquery = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    setIsMobileView(mquery);
  }, [mquery]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsShow(!isShow);
  };

  const className = clsx(s.headerContainer, isScrolled && s.scroll);

  return (
    <Header>
      <Container className={className}>
        {isMobileView ? (
          <>
            <Navigation />
            <Logo />
            <SocialIcons linkStyle={s.link} iconStyle={s.icon} />
          </>
        ) : (
          <>
            <Logo />
            <BurgerMenu isShow={isShow} setIsShow={toggleMobileMenu} />
            {/* <NavigationMobile /> */}
            {/* <Telegram /> */}
          </>
        )}
      </Container>
      <MobileMenu isShow={isShow} setIsShow={toggleMobileMenu} />
    </Header>
  );
}
