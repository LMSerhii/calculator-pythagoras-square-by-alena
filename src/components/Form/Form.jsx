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
        <div className={css.inputWrapper}>
          {/* <p className={css.label}>Введите вашу дату рождения</p> */}
          {/* <p className={css.label}>Please enter your date of birth</p> */}
          <ReactInputMask
            className={css.inputMask}
            mask="99.99.9999"
            maskPlaceholder="__.__.____"
            // placeholder="mm.dd.yyyy"
            placeholder="Please enter your date of birth"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
        </div>
        {!isShow ? (
          <button className={css.button} type="submit" onClick={handleClickSet}>
            Calculate
          </button>
        ) : (
          <button
            className={css.button}
            type="submit"
            onClick={handleClickClear}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
}
