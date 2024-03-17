import css from './Hero.module.css';
import image from './calculator.png';

export default function Hero() {
  return (
    <div className={css.hero}>
      <div className={css.thumb}>
        <img
          className={css.image}
          src={image}
          alt="Квадрат Пифагора"
          width={413}
        />
      </div>
      <div className={css.textWrapp}>
        <p className={css.text}>
          Квадрат Пифагора ― это нумерологическая система, которую используют
          для анализа личности и жизни человека по дате рождения . После
          проведения расчёта полученные цифры вносятся в матрицу 3 х 3
          квадратной формы, поэтому метод также называют Квадрат Пифагора по
          дате рождения или Психоматрица.
        </p>
      </div>
    </div>
  );
}
