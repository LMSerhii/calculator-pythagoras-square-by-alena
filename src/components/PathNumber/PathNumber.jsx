import s from './PathNumber.module.css';

export default function PathNumber({ number }) {
  return (
    <p className={s.text}>
      Число Жизненого Пути: <span className={s.numbers}>{number}</span>
    </p>
  );
}
