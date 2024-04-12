import s from './DateSelect.module.css';

const DateSelect = ({ array }) => {
  return (
    <div className={s.dropDown}>
      <button type="button" className={s.dropdownButton} onClick={handleClick}>
        {day}
      </button>
      {isShowList && (
        <ul className={s.dropdownList}>
          {array.map((num, index) => (
            <li
              key={index}
              className={s.dropdownItem}
              value={num}
              onClick={itemClick}
            >
              {num}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DateSelect;
