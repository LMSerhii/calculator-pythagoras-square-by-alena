import Content from '../Content/Content';
import PictureContent from '../PictureContent/PictureContent';
import s from './ConsultationContent.module.css';

const ConsultationContent = () => {
  return (
    <div className={s.consultationContent}>
      <PictureContent />
      <Content />
    </div>
  );
};

export default ConsultationContent;
