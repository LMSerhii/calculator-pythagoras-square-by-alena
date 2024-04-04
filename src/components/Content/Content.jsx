import s from './Content.module.css';
import ContentText from '../ContentText/ContentText';
import ContentTitle from '../ContentTitle/ContentTitle';
import Link from '../Link/Link';

const Content = () => {
  return (
    <div className={s.content}>
      <ContentTitle>Запишитесь на консультацию</ContentTitle>
      <ContentText />
      <Link className={s.link} to="https://t.me/olena_numero_aroma">
        Записаться
      </Link>
    </div>
  );
};

export default Content;
