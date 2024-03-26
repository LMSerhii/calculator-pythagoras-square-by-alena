import clsx from 'clsx';
import s from './Link.module.css';

export default function Link({ className, to, children, ...props }) {
  const buildLinkClass = clsx(s.link, className && className);

  return (
    <div>
      <a
        className={buildLinkClass}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    </div>
  );
}
