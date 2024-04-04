import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactInputMask from 'react-input-mask';
import css from './Form.module.css';
import { addDate } from '../../redux/dateSlice';
import { selectIsShow } from '../../redux/selectors';
import { addLifeNumbers, setIsShow } from '../../redux/calculatorSlice';
import { converteDate } from '../../helpers/calculator-pythagoras-square';

export default function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const isShow = useSelector(selectIsShow);

  // const mquery = useMediaQuery('(min-width: 768px)');

  const handleClickSet = e => {
    e.preventDefault();

    if (!value) {
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
    <div className={css.wrap}>
      <form className={css.form}>
        {!isShow ? (
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
        )}

        <div className={css.inputWrapper}>
          <ReactInputMask
            className={css.inputMask}
            mask="99.99.9999"
            maskPlaceholder="__.__.____"
            // placeholder="mm.dd.yyyy"
            placeholder="Введите вашу дату рождения"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
        </div>
      </form>
    </div>
  );
}
