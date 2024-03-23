import { createSelector } from '@reduxjs/toolkit';
import { calculatorPythagorasSquare } from '../helpers/calculator-pythagoras-square';

export const selectDate = state => state.date.value;
export const selectIsShow = state => state.calculator.isShow;
export const selectLifeNumbers = state => state.calculator.lifeNumbers;

export const selectResult = createSelector(
  [selectDate, selectLifeNumbers],
  (date, lifeNumbers) => {
    return calculatorPythagorasSquare(date, lifeNumbers);
  }
);
