import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import css from './Form.module.css';
import { DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { Button, useMediaQuery } from '@mui/material';

export default function Form() {
  const [value, setValue] = useState(dayjs('2022-04-17'));
  const mquery = useMediaQuery('(min-width: 768px)');

  const handleClick = e => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className={css.wrap}>
      {/* <form className={css.form}>
        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor="inputId">
            Введите вашу дату рождения
          </label>
          <input
            className={css.input}
            type="date"
            id={inputId}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <button className={css.button} type="submit" onClick={handleClick}>
          Расчитать
        </button>
      </form> */}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {mquery ? (
          <DesktopDatePicker
            value={value}
            onChange={newValue => setValue(newValue)}
          />
        ) : (
          <MobileDatePicker
            value={value}
            onChange={newValue => setValue(newValue)}
          />
        )}
      </LocalizationProvider>
      <Button className={css.button} variant="contained" onClick={handleClick}>
        Расчитать
      </Button>
    </div>
  );
}
