import css from './Title.module.css';

export default function Title({ children }) {
  return <p className={css.title}>{children}</p>;
}
