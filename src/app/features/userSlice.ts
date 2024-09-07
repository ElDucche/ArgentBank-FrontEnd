import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { UserState} from '../../../types.d.ts';


const initialState: Partial<UserState> = {
    firstName: '',
    lastName: '',
    email: '',
    token:'',
    remember: false,
};

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({email, password, remember}:{email:string, password:string, remember:boolean}) => {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
  
      const data = await response.json();
      return {
        token :data.body.token,
        remember
      };
    }
);

export const profileUser = createAsyncThunk(
    'user/profileUser',
    async (token:string) => {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await response.json();
      return { firstName: data.body.firstName, lastName: data.body.lastName, email: data.body.email};
    }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({firstName, lastName, token}:{firstName:string, lastName:string, token:string}) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        firstName,
        lastName,
      })
    });

    const data = await response.json();
    return { firstName: data.body.firstName, lastName: data.body.lastName};
  });

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser(state) {
          // Réinitialiser l'état de l'utilisateur à l'état initial
          state.firstName = '';
          state.lastName = '';
          state.email = '';
          state.token = '';
          // Réinitialisez d'autres champs selon vos besoins
          // Effacer le token stocké localement
          localStorage.removeItem('token');
        },        
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
          state.token = action.payload.token;
          if (action.payload?.remember) {
            localStorage.setItem('token', action.payload.token)
          }
        });
        builder.addCase(loginUser.rejected, (state, action) => {
          action.payload = 'Invalid email or password'
        });
        builder.addCase(profileUser.fulfilled, (state, action) => {
          const { firstName, lastName, email } = action.payload;
          state.firstName = firstName;
          state.lastName = lastName;
          state.email = email;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
        });
    }
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;