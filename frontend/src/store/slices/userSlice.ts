import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/types";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user: User) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/auth/users/",
      user,
    );
    return response.data;
  },
);

interface AuthState {
  loading: boolean;
  error: string | null;
  user: User | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default authSlice.reducer;
