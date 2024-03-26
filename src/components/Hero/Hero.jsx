import Container from '../Container/Container';
import Section from '../Section/Section';
import css from './Hero.module.css';
import image from './calculator.png';

export default function Hero() {
  return (
    <Section>
      <Container>
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
            {/* <p className={css.text}>
              Квадрат Пифагора ― это нумерологическая система, которую
              используют для анализа личности и жизни человека по дате рождения
              . После проведения расчёта полученные цифры вносятся в матрицу 3 х
              3 квадратной формы, поэтому метод также называют Квадрат Пифагора
              по дате рождения или Психоматрица.
            </p> */}
            <p className={css.text}>
              {
                "The square of Pythagoras is a numerological system that is used used to analyze a person's personality and life based on their date of birth. After the calculation the obtained numbers are entered into a 3 x 3 square matrix. 3 square matrix, so the method is also called Pythagoras Square. by date of birth or Psychomatrix."
              }
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
