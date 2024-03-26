import clsx from 'clsx';
import s from './Section.module.css';

const Section = ({ className, children }) => {
  const BuildSectionClass = clsx(s.section, className && className);

  return <section className={BuildSectionClass}>{children}</section>;
};

export default Section;
