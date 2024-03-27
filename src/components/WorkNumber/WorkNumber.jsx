import s from './WorkNumber.module.css';

export default function WorkNumber({ first, second, third, fourth }) {
  return (
    <p className={s.text}>
      Working Numbers:
      <span className={s.numbers}>
        {first}, {second}, {third}, {fourth}
      </span>
    </p>
  );
}
