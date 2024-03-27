import { useSelector } from 'react-redux';
import css from './SquareMobile.module.css';
import { selectResult } from '../../redux/selectors';

export default function SquareMobile() {
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

  return (
    <div className={css.wrapper}>
      <div className={css.leftSide}>
        <div className={css.first}>
          <div>
            <span>{character}</span>
            <span>character</span>
          </div>
          <div>
            <span>{energy}</span>
            <span>energy</span>
          </div>
          <div>
            <span>{interest}</span>
            <span>interest</span>
          </div>
          <div id={css.selfEsteem}>
            <span>{selfEsteem}</span>
            <span>selfEsteem</span>
          </div>
        </div>
        <div className={css.second}>
          <div>
            <span>{health}</span>
            <span>health</span>
          </div>
          <div>
            <span>{logic}</span>
            <span>logic</span>
          </div>
          <div>
            <span>{labour}</span>
            <span>labour</span>
          </div>
          <div id={css.work}>
            <span>{work}</span>
            <span>work</span>
          </div>
        </div>
      </div>
      <div className={css.rightSide}>
        <div className={css.third}>
          <div>
            <span>{luck}</span>
            <span>luck</span>
          </div>
          <div>
            <span>{duty}</span>
            <span>duty</span>
          </div>
          <div>
            <span>{memory}</span>
            <span>memory</span>
          </div>
          <div id={css.talent}>
            <span>{talent}</span>
            <span>talent</span>
          </div>
        </div>
        <div className={css.forth}>
          <div id={css.purpose}>
            <span>{purpose}</span>
            <span>purpose</span>
          </div>
          <div id={css.family}>
            <span>{family}</span>
            <span>family</span>
          </div>
          <div id={css.habits}>
            <span>{habits}</span>
            <span>habits</span>
          </div>
          <div id={css.spiritTemperament}>
            <div id={css.spirit}>
              <span>{spirit}</span>
              <span>spirit</span>
            </div>
            <div id={css.temperament}>
              <span>{temperament}</span>
              <span>temperament</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
