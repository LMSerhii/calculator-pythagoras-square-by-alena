import Container from '../Container/Container';
import Link from '../Link/Link';
import Section from '../Section/Section';
import css from './Action.module.css';

export default function Action() {
  return (
    <Section className={css.section}>
      <Container>
        <div className={css.action}>
          <p className={css.text}>
            Прикоснитесь к тайнам чисел Пифагора: используйте наш калькулятор,
            чтобы рассчитать квадрат даты рождения онлайн. Просто введите цифры
            в специальное поле и получите свой квадрат Пифагора и
            нумерологический расчет квадрата по вашей дате.
          </p>
          <Link className={css.link} to="#squareSection" target="_self">
            Рассчитайте свою психоматрицу
          </Link>
        </div>
      </Container>
    </Section>
  );
}
