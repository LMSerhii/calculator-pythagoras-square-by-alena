import s from './SocialIcons.module.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import clsx from 'clsx';

export default function SocialIcons({ linkStyle, iconStyle }) {
  const buldLinkStyle = clsx(s.link, linkStyle && linkStyle);
  const buldIconStyle = clsx(s.icon, iconStyle && iconStyle);

  return (
    <ul className={s.socialIcons}>
      <li>
        <a
          className={buldLinkStyle}
          href="https://t.me/olena_numero_aroma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className={buldIconStyle} size={22} />
        </a>
      </li>
      <li>
        <a
          className={buldLinkStyle}
          href="https://www.instagram.com/olena_numerolog888/?igsh=MW50MmRxcG80ZnNrOQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill className={buldIconStyle} size={22} />
        </a>
      </li>
      <li>
        <a
          className={buldLinkStyle}
          href="https://www.facebook.com/alionka.shimkova?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className={buldIconStyle} size={20} />
        </a>
      </li>
      <li>
        <a
          className={buldLinkStyle}
          href="https://www.tiktok.com/@olena_numero_aroma?_t=8lEcczlqENq&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className={buldIconStyle} size={20} />
        </a>
      </li>
    </ul>
  );
}
