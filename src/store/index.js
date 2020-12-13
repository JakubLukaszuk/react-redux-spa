import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from '../slices/userSlice';

export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});