import clsx from 'clsx';
import s from './Button.module.css';

export default function Button({ className, onClick, children, ...props }) {
  const buildButtonClass = clsx(s.link, className && className);

  return (
    <button className={buildButtonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
