import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@store/reducers/auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
