import { useSelector } from 'react-redux';
import CopyToClipboardOnClick from '../CopyToClipboardOnClick/CopyToClipboardOnClick';
import { selectLifeNumbers, selectResult } from '../../redux/selectors';

export default function StringResults() {
  const {
    character,
    health,
    luck,
    energy,
    logic,
    duty,
    interest,
    labour,
    memory,
    selfEsteem,
    work,
    talent,
    purpose,
    family,
    habits,
    spirit,
    temperament,
  } = useSelector(selectResult);

  const { fifth } = useSelector(selectLifeNumbers);

  const text = `${character}/${energy}/${interest}/${health}/${logic}/${labour}/${luck}/${duty}/${memory}/ЧЖП${fifth}/цель${purpose}/семья${family}/привыч${habits}/самооц${selfEsteem}/работа${work}/талант${talent}/дух${spirit}/темп${temperament}`;

  return <CopyToClipboardOnClick text={text} />;
}
