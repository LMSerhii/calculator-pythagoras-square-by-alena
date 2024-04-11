import Container from '../Container/Container';
import Section from '../Section/Section';
import css from './Hero.module.css';
import image from '../../images/square.png';
import Title from '../Title/Title';

function Hero() {
  return (
    <Section>
      <Container>
        <div className={css.hero}>
          <div className={css.wrapper}>
            <div className={css.textWrapp}>
              <Title>Калькулятор Квадрат Пифагора</Title>
              <p className={css.text}>
                Квадрат Пифагора ― это нумерологическая система, которую
                используют для анализа личности и жизни человека по дате
                рождения . После проведения расчёта полученные цифры вносятся в
                матрицу 3 х 3 квадратной формы, поэтому метод также называют
                Квадрат Пифагора по дате рождения или Психоматрица.
              </p>
            </div>
            <div className={css.thumb}>
              <img
                className={css.image}
                src={image}
                alt="Квадрат Пифагора"
                width={413}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
