import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import useMediaQuery from '../../hooks/useMediaQuery';
import ReactInputMask from 'react-input-mask';
import css from './Form.module.css';
import { addDate } from '../../redux/dateSlice';
import { addLifeNumbers, setIsShow } from '../../redux/calculatorSlice';
import { converteDate } from '../../helpers/calculator-pythagoras-square';
import { useState } from 'react';
import Container from '../Container/Container';
import { smoothScrollBy } from '../../helpers/smoothScrollBy';

function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const mobile = useMediaQuery('(min-width: 375px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1440px)');

  const handleChange = e => {
    const value = e.target.value;

    const parts = value.split('.');

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (day > 31) {
      toast.error('День не может быть больше 31');
    }

    if (month > 12) {
      toast.error('Месяц не может быть больше 12');
    }

    if (year > new Date().getFullYear()) {
      toast.error('Год не может быть больше текущего');
    }

    setValue(value);
  };

  const handleClickSet = e => {
    e.preventDefault();
    setValue('');

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

  const scrollLength = (mobile && 200) || (tablet && 400) || (desktop && 600);

  return (
    <Container>
      <form className={css.form}>
        <div className={css.inputWrapper}>
          <ReactInputMask
            className={css.inputMask}
            mask="99.99.9999"
            maskPlaceholder="__.__.____"
            placeholder="дд.мм.гггг"
            onChange={handleChange}
            value={value}
          />
        </div>

        <button className={css.button} type="submit" onClick={handleClickSet}>
          Расчитать
        </button>
      </form>
    </Container>
  );
}

export default Form;
