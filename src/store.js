import { configureStore } from '@reduxjs/toolkit';
import userReducer from './utils/userSlice'; // Example slice

const store = configureStore({
  reducer: {
    user: userReducer,  // Add your slice reducers here
  },
});

export default store;
