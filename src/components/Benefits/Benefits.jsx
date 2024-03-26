import Container from '../Container/Container';
import Section from '../Section/Section';
import css from './Benefits.module.css';

export default function Benefits() {
  return (
    <Section>
      <Container>
        <div className={css.benefits}>
          {/* <p className={css.title}>Системой пользуются, чтобы:</p> */}
          {/* <p className={css.text}>
        выяснить, какими качествами обладает человек, как сочетаются разные
        черты характера и проявления личности, отвечающие за лидерские качества,
        уровень энергии, работоспособность, ответственность, склонность к разным
        занятиям.
      </p> */}
          <p className={css.title}>The system is used to:</p>
          <p className={css.text}>
            to find out what qualities a person possesses, how the different
            character traits and manifestations of personality, which are
            responsible for leadership qualities, energy level, efficiency,
            responsibility, aptitude for different activities.
          </p>
        </div>
      </Container>
    </Section>
  );
}
