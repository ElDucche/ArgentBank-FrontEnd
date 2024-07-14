import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import { UserState } from '../../types' // Import the UserState type from userSlice

const preloadedState = (): { user?: Partial<UserState> } | undefined => { // Define the type of preloadedState function
  const token = localStorage.getItem('token');
  if (token) {
    return {
      user: {
        token,
      },
    };
  }
  return undefined; // Return undefined instead of an empty object
};



export default configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: preloadedState(),
})