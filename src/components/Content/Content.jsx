import s from './Content.module.css';
import ContentText from '../ContentText/ContentText';
import ContentTitle from '../ContentTitle/ContentTitle';

const Content = () => {
  return (
    <div className={s.content}>
      <ContentTitle>Записатися до Ірини</ContentTitle>
      <ContentText />
    </div>
  );
};

export default Content;
