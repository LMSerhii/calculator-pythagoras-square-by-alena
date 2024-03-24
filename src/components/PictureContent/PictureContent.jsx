import consultationMob from '../../images/consultation/consultation-mob.png';
import consultationMob2x from '../../images/consultation/consultation-mob@2x.png';
import consultationTab from '../../images/consultation/consultation-tab.png';
import consultationTab2x from '../../images/consultation/consultation-tab@2x.png';
import consultationDesc from '../../images/consultation/consultation-desc.png';
import consultationDesc2x from '../../images/consultation/consultation-desc@2x.png';

import s from './PictureContent.module.css';
import Picture from '../Picture/Picture';

const PictureContent = () => {
  return (
    <div className={s.thumb}>
      <Picture
        mob={consultationMob}
        mob2x={consultationMob2x}
        tab={consultationTab}
        tab2x={consultationTab2x}
        desc={consultationDesc}
        desc2x={consultationDesc2x}
        alt="psyshologist avatar"
        width={343}
      />
    </div>
  );
};

export default PictureContent;
