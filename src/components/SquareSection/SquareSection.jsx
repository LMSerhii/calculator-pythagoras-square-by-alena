import { useSelector } from 'react-redux';
import { selectIsShow } from '../../redux/selectors';
import Container from '../Container/Container';
import Form from '../Form/Form';
import Section from '../Section/Section';
import Title from '../Title/Title';
import LifeNumbers from '../LifeNumbers/LifeNumbers';
import StringResults from '../StringResults/StringResults';
import SquareMobile from '../SquareMobile/SquareMobile';

export default function SquareSection() {
  const isShow = useSelector(selectIsShow);

  return (
    <Section>
      <Container>
        <div id="squareSection"></div>
        <Title>Calculator Pythagoras Square</Title>
        <Form />
        {isShow && <LifeNumbers />}
        {isShow && <SquareMobile />}
        {isShow && <StringResults />}
      </Container>
    </Section>
  );
}
