import s from './Content.module.css';
import ContentText from '../ContentText/ContentText';
import ConsultationBtn from '../ConsultationBtn/ConsultationBtn';

const Content = () => {
  return (
    <div className={s.content}>
      <ContentText />
      <ConsultationBtn />
    </div>
  );
};

export default Content;
