import s from './SocialIcons.module.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import clsx from 'clsx';

export default function SocialIcons({ linkStyle, iconStyle }) {
  const buldLinkStyle = clsx(s.link, linkStyle && linkStyle);
  const buldIconStyle = clsx(s.icon, iconStyle && iconStyle);

  return (
    <ul className={s.socialIcons}>
      <li>
        <a
          className={buldLinkStyle}
          href="http://telegram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className={buldIconStyle} size={22} />
        </a>
      </li>
      <li>
        <a
          className={buldLinkStyle}
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill className={buldIconStyle} size={22} />
        </a>
      </li>
      <li>
        <a
          className={buldLinkStyle}
          href="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className={buldIconStyle} size={20} />
        </a>
      </li>
    </ul>
  );
}
