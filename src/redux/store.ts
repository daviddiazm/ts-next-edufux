import {configureStore} from '@reduxjs/toolkit'
import userSlice from './features/userSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();