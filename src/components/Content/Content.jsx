import s from './Content.module.css';
import ContentText from '../ContentText/ContentText';
import ContentTitle from '../ContentTitle/ContentTitle';
import Link from '../Link/Link';

const Content = () => {
  return (
    <div className={s.content}>
      <ContentTitle>Sign up for a consultation with Alyona</ContentTitle>
      <ContentText />
      <Link to="https://telegram.org/">Sign up</Link>
    </div>
  );
};

export default Content;
