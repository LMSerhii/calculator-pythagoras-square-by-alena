import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import useMediaQuery from '../../hooks/useMediaQuery';
import css from './Form.module.css';
import { addDate } from '../../redux/dateSlice';
import { addLifeNumbers, setIsShow } from '../../redux/calculatorSlice';
import { converteDate } from '../../helpers/calculator-pythagoras-square';
import { smoothScrollBy } from '../../helpers/smoothScrollBy';
import Container from '../Container/Container';

function Form() {
  const dispatch = useDispatch();

  const [isShowDayList, setIsShowDayList] = useState(false);
  const [isShowMonthList, setIsShowMonthList] = useState(false);
  const [isShowYearList, setIsShowYearList] = useState(false);

  const [day, setDay] = useState('День');
  const [month, setMonth] = useState('Месяц');
  const [year, setYear] = useState('Год');

  const mobile = useMediaQuery('(min-width: 375px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1440px)');

  const handleClickSet = e => {
    e.preventDefault();

    if (!parseInt(day)) {
      toast.error('Введите день Рождения');
      return;
    }

    if (!parseInt(month)) {
      toast.error('Введите месяц Рождения');
      return;
    }

    if (!parseInt(year)) {
      toast.error('Введите год Рождения');
      return;
    }

    dispatch(
      addDate({
        day: day,
        month: month,
        year: year,
      })
    );

    dispatch(
      addLifeNumbers(
        converteDate({
          day: day,
          month: month,
          year: year,
        })
      )
    );

    dispatch(setIsShow(true));

    smoothScrollBy(0, scrollLength, 500);
  };

  const handleDayClick = () => {
    setIsShowDayList(!isShowDayList);
  };
  const handleMonthClick = () => {
    setIsShowMonthList(!isShowMonthList);
  };
  const handleYearClick = () => {
    setIsShowYearList(!isShowYearList);
  };

  const itemDayClick = e => {
    setDay(e.target.value);
    setIsShowDayList(false);
  };

  const itemMonthClick = e => {
    setMonth(e.target.value);
    setIsShowMonthList(false);
  };

  const itemYearClick = e => {
    setYear(e.target.value);
    setIsShowYearList(false);
  };

  const scrollLength = (mobile && 200) || (tablet && 400) || (desktop && 600);

  let numbersDayArray = Array.from(
    { length: 31 },
    (_, index) => index + 1
  ).reverse();

  let numbersMonthArray = Array.from(
    { length: 12 },
    (_, index) => index + 1
  ).reverse();

  const currentYear = new Date().getFullYear();
  let numbersYearArray = Array.from(
    { length: currentYear - 1899 },
    (_, index) => 1900 + index
  ).reverse();

  return (
    <Container>
      <form className={css.form}>
        <div className={css.selectGroup}>
          <div className={css.dropDown}>
            <button
              type="button"
              className={css.dropdownButton}
              onClick={handleDayClick}
            >
              {day}
            </button>
            {isShowDayList && (
              <ul className={css.dropdownList}>
                {numbersDayArray.map((num, index) => (
                  <li
                    key={index}
                    className={css.dropdownItem}
                    value={num}
                    onClick={itemDayClick}
                  >
                    {num}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={css.dropDown}>
            <button
              type="button"
              className={css.dropdownButton}
              onClick={handleMonthClick}
            >
              {month}
            </button>
            {isShowMonthList && (
              <ul className={css.dropdownList}>
                {numbersMonthArray.map((num, index) => (
                  <li
                    key={index}
                    className={css.dropdownItem}
                    value={num}
                    onClick={itemMonthClick}
                  >
                    {num}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={css.dropDown}>
            <button
              type="button"
              className={css.dropdownButton}
              onClick={handleYearClick}
            >
              {year}
            </button>
            {isShowYearList && (
              <ul className={css.dropdownList}>
                {numbersYearArray.map((num, index) => (
                  <li
                    key={index}
                    className={css.dropdownItem}
                    value={num}
                    onClick={itemYearClick}
                  >
                    {num}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button className={css.button} type="submit" onClick={handleClickSet}>
          Расчитать
        </button>
      </form>
    </Container>
  );
}

export default Form;
