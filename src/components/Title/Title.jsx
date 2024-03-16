import { Typography } from '@mui/material';
import css from './Title.module.css';

export default function Title({ children }) {
  return (
    <Typography variant="h3" component="p" className={css.title}>
      {children}
    </Typography>
  );
}
