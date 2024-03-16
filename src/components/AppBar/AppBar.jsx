import { Typography, useMediaQuery } from '@mui/material';
import css from './AppBar.module.css';
import { BsStars } from 'react-icons/bs';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';

export default function AppBar() {
  const [isMobileView, setIsMobileView] = useState(false);

  const mquery = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setIsMobileView(mquery);
  }, [mquery]);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.logoWrapper}>
          <BsStars color="yellow" />
          <Typography variant="body1">Logo</Typography>
        </div>
        {isMobileView ? <Navigation /> : <NavigationMobile />}
      </nav>
    </header>
  );
}
