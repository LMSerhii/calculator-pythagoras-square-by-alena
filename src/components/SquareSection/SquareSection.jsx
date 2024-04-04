import { useSelector } from 'react-redux';
import { selectIsShow } from '../../redux/selectors';
import Container from '../Container/Container';
import Section from '../Section/Section';
import LifeNumbers from '../LifeNumbers/LifeNumbers';
import StringResults from '../StringResults/StringResults';
import SquareMobile from '../SquareMobile/SquareMobile';

export default function SquareSection() {
  const isShow = useSelector(selectIsShow);

  if (isShow) {
    return (
      <Section>
        <Container>
          <div id="squareSection"></div>
          <LifeNumbers />
          <SquareMobile />
          <StringResults />
        </Container>
      </Section>
    );
  }
}
