import Link from '../Link/Link';
import s from './ConsultationBtn.module.css';

const ConsultationBtn = () => {
  return (
    <Link className={s.link} to="https://t.me/olena_numero_aroma">
      Записаться на консультацию
    </Link>
  );
};

export default ConsultationBtn;
