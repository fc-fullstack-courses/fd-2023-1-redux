import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../api';

const SLICE_NAME = 'users';

const createUser = createAsyncThunk(
  `${SLICE_NAME}/create`,
  async (userData, thunkAPI) => {
    try {
      // сделать запрос на сервер
      const response = await API.createUser(userData);

      const { data: { data: user } } = response;

      // вернуть success action type
      return user;
    } catch (error) {
      // в случае ошибок
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const initialState = {
  users: [],
  isLoading: false,
  error: null
}

const usersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    // request
    builder.addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
    });

    // success
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    });

    // error 
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

const { reducer: userReducer } = usersSlice;

export { createUser };

export default userReducer;