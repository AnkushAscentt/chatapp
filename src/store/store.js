import { configureStore } from '@reduxjs/toolkit';
import  querySlice  from './slices/querySlice';

export const store = configureStore({
  reducer: {
    queries: querySlice,
  },
});
