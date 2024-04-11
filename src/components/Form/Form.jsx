import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import useMediaQuery from '../../hooks/useMediaQuery';
import ReactInputMask from 'react-input-mask';
import css from './Form.module.css';
import { addDate } from '../../redux/dateSlice';
import { selectIsShow } from '../../redux/selectors';
import { addLifeNumbers, setIsShow } from '../../redux/calculatorSlice';
import { converteDate } from '../../helpers/calculator-pythagoras-square';
import { useState } from 'react';
import Container from '../Container/Container';
import { smoothScrollBy } from '../../helpers/smoothScrollBy';

function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const isShow = useSelector(selectIsShow);

  const mobile = useMediaQuery('(min-width: 375px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1440px)');

  const scrollLength = (mobile && 200) || (tablet && 400) || (desktop && 600);

  const handleClickSet = e => {
    e.preventDefault();

    if (!value) {
      toast.error('Вы не ввели дату рождения.');

      dispatch(setIsShow(false));
      return;
    }

    const dateList = value.split('.').map(Number);

    const validate = !dateList.some(el => isNaN(el));

    if (!validate) {
      return;
    }

    const [day, month, year] = dateList;

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

  const handleClickClear = e => {
    e.preventDefault();
    dispatch(
      addDate({
        day: null,
        month: null,
        year: null,
      })
    );
    setValue('');
    dispatch(setIsShow(false));
  };

  return (
    <Container>
      <form className={css.form}>
        <div className={css.inputWrapper}>
          <ReactInputMask
            className={css.inputMask}
            mask="99.99.9999"
            maskPlaceholder="__.__.____"
            placeholder="дд.мм.гггг"
            // placeholder="Введите вашу дату рождения"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
        </div>

        {/* {!isShow ? (
          <button className={css.button} type="submit" onClick={handleClickSet}>
            Расчитать
          </button>
        ) : (
          <button
            className={css.button}
            type="submit"
            onClick={handleClickClear}
          >
            Очистить
          </button>
        )} */}

        <button className={css.button} type="submit" onClick={handleClickSet}>
          Расчитать
        </button>
      </form>
    </Container>
  );
}

export default Form;
