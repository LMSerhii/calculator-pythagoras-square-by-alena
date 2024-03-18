import { createSelector } from '@reduxjs/toolkit';
import {
  calculatorPythagorasSquare,
  calculatorPythagorasSquareToString,
} from '../helpers/calculator-pythagoras-square';

export const selectDate = state => state.date.value;
export const selectIsShow = state => state.calculator.isShow;

export const selectResult = createSelector([selectDate], date => {
  return calculatorPythagorasSquare(date);
});

export const selectResultString = createSelector([selectDate], date => {
  return calculatorPythagorasSquareToString(date);
});
