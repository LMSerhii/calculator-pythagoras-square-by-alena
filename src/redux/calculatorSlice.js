import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setIsShow: (state, action) => {
      state.isShow = action.payload;
    },
  },
});

export const { setIsShow } = calculatorSlice.actions;

export default calculatorSlice.reducer;

//Selectors
