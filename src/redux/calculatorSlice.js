import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
  lifeNumbers: {},
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setIsShow: (state, action) => {
      state.isShow = action.payload;
    },
    addLifeNumbers: (state, action) => {
      state.lifeNumbers = action.payload;
    },
  },
});

export const { setIsShow, addLifeNumbers } = calculatorSlice.actions;

export default calculatorSlice.reducer;

//Selectors
