import { useSelector } from 'react-redux';
import css from './Square.module.css';
import { selectResult } from '../../redux/selectors';

export default function Square() {
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
      <div className={css.left}>
        <div className={css.leftTop}>
          <div className={css.leftTopFirst}>
            <div>
              <span>{character}</span>
              <span>character</span>
            </div>
            <div>
              <span>{health}</span>
              <span>health</span>
            </div>
            <div>
              <span>{luck}</span>
              <span>luck</span>
            </div>
          </div>
          <div className={css.leftTopSecond}>
            <div>
              <span>{energy}</span>
              <span>energy</span>
            </div>
            <div>
              <span>{logic}</span>
              <span>logic</span>
            </div>
            <div>
              <span>{duty}</span>
              <span>duty</span>
            </div>
          </div>
          <div className={css.leftTopThird}>
            <div>
              <span>{interest}</span>
              <span>interest</span>
            </div>
            <div>
              <span>{labour}</span>
              <span>labour</span>
            </div>
            <div>
              <span>{memory}</span>
              <span>memory</span>
            </div>
          </div>
        </div>
        <div className={css.leftDown}>
          <div>
            <span>{selfEsteem}</span>
            <span>selfEsteem</span>
          </div>
          <div>
            <span>{work}</span>
            <span>work</span>
          </div>
          <div>
            <span>{talent}</span>
            <span>talent</span>
          </div>
        </div>
      </div>
      <div className={css.right}>
        <div className={css.rightTop}>
          <div>
            <span>{purpose}</span>
            <span>purpose</span>
          </div>
          <div>
            <span>{family}</span>
            <span>family</span>
          </div>
          <div>
            <span>{habits}</span>
            <span>habits</span>
          </div>
        </div>
        <div className={css.rightDown}>
          <div>
            <span>{spirit && temperament && `${spirit} / ${temperament}`}</span>
            <span>spirit / temperament</span>
          </div>
        </div>
      </div>
    </div>
  );
}
