import { createSlice } from '@reduxjs/toolkit';

const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    name: '',
  },
  reducers: {
    setValue(state, actions) {
      const { payload } = actions;
      return {
        ...state,
        name: payload,
      };
    },
  },
});

export const {
  setValue,
} = sampleSlice.actions;

export default sampleSlice.reducer;
