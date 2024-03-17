import css from './Action.module.css';

export default function Action() {
  return (
    <div className={css.action}>
      <p className={css.text}>
        Прикоснитесь к тайнам чисел Пифагора: воспользуйтесь нашим
        калькулятором, чтобы рассчитать свой квадрат по дате рождения онлайн.
        Просто введите цифры в специальное окошко ― и получите свой Квадрат
        Пифагора и нумерологический расчёт Квадрат по вашей дате.
      </p>
      <button className={css.button} type="button">
        Расчитать свою Психоматрицу
      </button>
    </div>
  );
}
