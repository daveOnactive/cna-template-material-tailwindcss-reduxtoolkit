import { configureStore } from '@reduxjs/toolkit';
import sample from './slice/sampleSlice';

const initializeStore = () => {
  return configureStore({
    reducer: {
      sample,
    },
    devTools: true,
  });
};

export default initializeStore();
