import { useSelector } from 'react-redux';
import Container from '../Container/Container';
import Form from '../Form/Form';
import Section from '../Section/Section';
import Title from '../Title/Title';
import { selectIsShow } from '../../redux/selectors';
import LifeNumbers from '../LifeNumbers/LifeNumbers';
import Square from '../Square/Square';
import StringResults from '../StringResults/StringResults';

export default function SquraeSection() {
  const isShow = useSelector(selectIsShow);

  return (
    <Section>
      <Container>
        <Title>Калькулятор Квадрат Пифагора</Title>
        <Form />
        {isShow && <LifeNumbers />}
        {isShow && <Square />}
        {isShow && <StringResults />}
      </Container>
    </Section>
  );
}
