import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import css from './Form.module.css';

export default function Form() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    console.log(value);
  };

  return (
    <div className={css.wrap}>
      <TextField
        className={css.field}
        id="outlined-basic"
        type="date"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button type="sumbit" variant="contained" onClick={handleClick}>
        Расчитать
      </Button>
    </div>
  );
}
