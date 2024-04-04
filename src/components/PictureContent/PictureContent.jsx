import mob from '../../images/alyona/img-5.jpg';

import s from './PictureContent.module.css';
import Picture from '../Picture/Picture';

const PictureContent = () => {
  return (
    <div className={s.thumb}>
      <Picture
        className={s.img}
        mob={mob}
        mob2x={mob}
        tab={mob}
        tab2x={mob}
        desc={mob}
        desc2x={mob}
        alt="psyshologist avatar"
        width={343}
      />
    </div>
  );
};

export default PictureContent;
