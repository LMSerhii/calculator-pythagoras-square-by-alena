import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import css from './Benefits.module.css';

export default function Benefits() {
  return (
    <Section className={css.section}>
      <Container>
        <div className={css.benefits}>
          <Title>Системой пользуются, чтобы:</Title>
          <p className={css.text}>
            Выяснить, какими качествами обладает человек, как сочетаются разные
            черты характера и проявления личности, отвечающие за лидерские
            качества, уровень энергии, работоспособность, ответственность,
            склонность к разным занятиям.
          </p>
          <p className={css.text}>
            Прикоснитесь к тайнам чисел Пифагора: используйте наш калькулятор,
            чтобы рассчитать квадрат даты рождения онлайн. Просто введите цифры
            в специальное поле и получите свой квадрат Пифагора и
            нумерологический расчет квадрата по вашей дате.
          </p>
        </div>
      </Container>
    </Section>
  );
}
