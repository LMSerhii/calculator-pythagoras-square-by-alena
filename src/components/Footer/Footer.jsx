import css from './Footer.module.css';
import Container from '../Container/Container';
import Logo from '../Logo/logo';
import Section from '../Section/Section';
import SocialIcons from '../SocialIcons/SocialIcons';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Section>
        <Container>
          <div className={css.footerWrapper}>
            <Logo className={css.logo} />
            <SocialIcons linkStyle={css.link} iconStyle={css.icon} />
          </div>
        </Container>
      </Section>
    </footer>
  );
}
