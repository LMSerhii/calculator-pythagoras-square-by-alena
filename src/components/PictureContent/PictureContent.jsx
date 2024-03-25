import heroMob from '../../images/hero/IMG_1742_1mob.png';
import heroMob2x from '../../images/hero/IMG_1742_1mob@2x.png';
import heroTab from '../../images/hero/IMG_1742_1tab.png';
import heroTab2x from '../../images/hero/IMG_1742_1tab@2x.png';
import heroDesk from '../../images/hero/IMG_1742_1desk.png';
import heroDesk2x from '../../images/hero/IMG_1742_1desk@2x.png';

import s from './PictureContent.module.css';
import Picture from '../Picture/Picture';

const PictureContent = () => {
  return (
    <div className={s.thumb}>
      <Picture
        className={s.img}
        mob={heroMob}
        mob2x={heroMob2x}
        tab={heroTab}
        tab2x={heroTab2x}
        desc={heroDesk}
        desc2x={heroDesk2x}
        alt="psyshologist avatar"
        width={343}
      />
    </div>
  );
};

export default PictureContent;
