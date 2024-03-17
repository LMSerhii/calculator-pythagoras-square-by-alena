import css from './Footer.module.css';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <p>Контакты</p>
      <ul className={css.socialLink}>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferer"
            aria-label="facebook icon"
          >
            <FaFacebook size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferer"
            aria-label="instagram icon"
          >
            <FaInstagram size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.telegram.com"
            target="_blank"
            rel="noopener noreferer"
            aria-label="telegram icon"
          >
            <FaTelegram size={32} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
