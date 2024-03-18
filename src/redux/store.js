import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './dateSlice';
import calculatorSlice from './calculatorSlice';

export const store = configureStore({
  reducer: {
    date: dateSlice,
    calculator: calculatorSlice,
  },
});
