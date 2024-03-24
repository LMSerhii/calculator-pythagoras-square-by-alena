import s from './BlogConsultation.module.css';
import ConsultationContent from '../ConsultationContent/ConsultationContent';
import Container from '../Container/Container';
import Section from '../Section/Section';

const BlogConsultation = () => {
  return (
    <Section className={s.section}>
      <Container>
        <ConsultationContent />
      </Container>
    </Section>
  );
};

export default BlogConsultation;
