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
            <span>Характер</span>
          </div>
          <div>
            <span>{energy}</span>
            <span>Энергия</span>
          </div>
          <div>
            <span>{interest}</span>
            <span>Интерес</span>
          </div>
          <div id={css.selfEsteem}>
            <span>{selfEsteem}</span>
            <span>Самооценка</span>
          </div>
        </div>
        <div className={css.second}>
          <div>
            <span>{health}</span>
            <span>Здоровье</span>
          </div>
          <div>
            <span>{logic}</span>
            <span>Логика</span>
          </div>
          <div>
            <span>{labour}</span>
            <span>Труд</span>
          </div>
          <div id={css.work}>
            <span>{work}</span>
            <span>Работа</span>
          </div>
        </div>
      </div>
      <div className={css.rightSide}>
        <div className={css.third}>
          <div>
            <span>{luck}</span>
            <span>Удача</span>
          </div>
          <div>
            <span>{duty}</span>
            <span>Долг</span>
          </div>
          <div>
            <span>{memory}</span>
            <span>Память</span>
          </div>
          <div id={css.talent}>
            <span>{talent}</span>
            <span>Талант</span>
          </div>
        </div>
        <div className={css.forth}>
          <div id={css.purpose}>
            <span>{purpose}</span>
            <span>Цель</span>
          </div>
          <div id={css.family}>
            <span>{family}</span>
            <span>Семья</span>
          </div>
          <div id={css.habits}>
            <span>{habits}</span>
            <span>Привычки</span>
          </div>
          <div id={css.spiritTemperament}>
            <div id={css.spirit}>
              <span>{spirit}</span>
              <span>Дух</span>
            </div>
            <div id={css.temperament}>
              <span>{temperament}</span>
              <span>Темперамент</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
