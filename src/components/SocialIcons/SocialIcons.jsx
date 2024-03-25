import s from './SocialIcons.module.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <ul className={s.socialIcons}>
      <li>
        <a
          className={s.link}
          href="http://telegram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className={s.icon} size={22} />
        </a>
      </li>
      <li>
        <a
          className={s.link}
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill className={s.icon} size={22} />
        </a>
      </li>
      <li>
        <a
          className={s.link}
          href="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className={s.icon} size={20} />
        </a>
      </li>
    </ul>
  );
}
