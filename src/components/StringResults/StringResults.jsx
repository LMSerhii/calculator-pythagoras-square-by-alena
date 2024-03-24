import { useSelector } from 'react-redux';
import CopyToClipboardOnClick from '../CopyToClipboardOnClick/CopyToClipboardOnClick';
import { selectLifeNumbers, selectResult } from '../../redux/selectors';
import s from './StringResults.module.css';

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

  return (
    <div className={s.wrapper}>
      <CopyToClipboardOnClick text={text} />
    </div>
  );
}
