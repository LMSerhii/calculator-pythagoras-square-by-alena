import s from './SocialIcons.module.css';
import { FaTelegram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <ul className={s.socialIcons}>
      <li>
        <a href="http://telegram.com" target="_blank" rel="noopener noreferrer">
          <FaTelegram className={s.icon} size={24} />
        </a>
      </li>
      <li>
        <a
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={s.icon} size={24} />
        </a>
      </li>
      <li>
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className={s.icon} size={24} />
        </a>
      </li>
    </ul>
  );
}
