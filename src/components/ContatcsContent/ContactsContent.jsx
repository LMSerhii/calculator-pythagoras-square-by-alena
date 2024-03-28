import Picture from '../Picture/Picture';
import s from './ContactsContent.module.css';

import conMob from '../../images/consultation/consultation-mob.png';
import conMob2x from '../../images/consultation/consultation-mob@2x.png';
import conTab from '../../images/consultation/consultation-tab.png';
import conTab2x from '../../images/consultation/consultation-tab@2x.png';
import conDesc from '../../images/consultation/consultation-desc.png';
import conDesc2x from '../../images/consultation/consultation-desc@2x.png';

export default function ContactsContent() {
  return (
    <div className={s.ContactsContent}>
      <div className={s.thumb}>
        <Picture
          className={s.img}
          mob={conMob}
          mob2x={conMob2x}
          tab={conTab}
          tab2x={conTab2x}
          desc={conDesc}
          desc2x={conDesc2x}
          alt="psyshologist avatar"
          width={343}
        />
      </div>
      <div className={s.about}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod hic
        dignissimos est, maiores ipsam quos odit neque ut ipsa fugit facere
        voluptatibus ab commodi aliquid beatae laboriosam corporis. Eveniet
        corporis, quam nesciunt eum consequatur optio maxime iusto similique!
        Eaque molestiae voluptas perspiciatis quia error vitae, at voluptate
        optio magnam aspernatur! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rem iure officiis excepturi ipsam deleniti, voluptates
        fugit? Illum quaerat explicabo soluta necessitatibus eius, eveniet
        veritatis nulla beatae voluptates nisi minus illo?
      </div>
    </div>
  );
}
