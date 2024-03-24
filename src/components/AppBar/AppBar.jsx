import NavigationMobile from '../NavigationMobile/NavigationMobile';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Header from '../Header/Header';
import SocialIcons from '../SocialIcons/SocialIcons';
import Telegram from '../Telegram/Telegram';
import Container from '../Container/Container';
import s from './AppBar.module.css';
import Logo from '../Logo/logo';

export default function AppBar() {
  const [isMobileView, setIsMobileView] = useState(false);

  const mquery = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    setIsMobileView(mquery);
  }, [mquery]);

  return (
    <Header>
      <Container className={s.header}>
        {isMobileView ? (
          <>
            <Logo />
            <Navigation />
            <SocialIcons />
          </>
        ) : (
          <>
            <NavigationMobile />
            <Logo />
            <Telegram />
          </>
        )}
      </Container>
    </Header>
  );
}
