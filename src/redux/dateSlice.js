import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    addDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addDate } = dateSlice.actions;

export default dateSlice.reducer;

//Selectors
