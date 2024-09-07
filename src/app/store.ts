import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import { UserState } from '../../types' // Import the UserState type from userSlice

const preloadedState = (): { user: Partial<UserState> } => { // Define the type of preloadedState function
  const token = localStorage.getItem('token');
  if (token) {
    return {
      user: {
        token,
      },
    };
  }
  return {
    user: {},
  }; // Return undefined instead of an empty object
};



export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: preloadedState(),
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]