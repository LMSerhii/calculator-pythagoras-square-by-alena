import Container from '../Container/Container';
import Link from '../Link/Link';
import Section from '../Section/Section';
import css from './Action.module.css';

export default function Action() {
  return (
    <Section>
      <Container>
        <div className={css.action}>
          <p className={css.text}>
            Touch the mysteries of Pythagoras numbers: use our calculator to
            calculate your birthdate square online. Just enter the numbers in
            the special box and get your Square Pythagoras Square and
            numerological calculation of the Square by your date.
          </p>
          <Link className={css.link} to="#">
            Calculate your Psychomatrix
          </Link>
        </div>
      </Container>
    </Section>
  );
}
