import css from './Benefits.module.css';

export default function Benefits() {
  return (
    <div className={css.benefits}>
      <p className={css.title}>Системой пользуются, чтобы:</p>
      <p className={css.text}>
        выяснить, какими качествами обладает человек, как сочетаются разные
        черты характера и проявления личности, отвечающие за лидерские качества,
        уровень энергии, работоспособность, ответственность, склонность к разным
        занятиям.
      </p>
    </div>
  );
}
