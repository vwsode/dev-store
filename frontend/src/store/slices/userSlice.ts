import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { User } from '../../types/types';

type RegisterPayloadAction = {
    user: {
        username: string;
        email: string;
        password: string;
        date_of_birth: string;
        first_name: string;
        last_name: string;
        auth_token: string;
    };
    error: string;
};

type LoginPayloadAction = {
    user: {
        username: string;
        email: string;
        password: string;
        date_of_birth: string;
        first_name: string;
        last_name: string;
        auth_token: string;
    };
    error: string;
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }: { username: string; password: string }) => {
        try {
            const { data } = await axios.post(
                'http://127.0.0.1:8000/api/auth/token/login/',
                {
                    username,
                    password,
                },
            );

            return {
                user: {
                    auth_token: data.auth_token,
                },
                error: '',
            };
        } catch (error) {
            const err = error as AxiosError;
            console.log(err);
        }
    },
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user: User) => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/auth/users/',
                user,
            );
            const token = await axios.post(
                'http://127.0.0.1:8000/api/auth/token/login/',
                {
                    username: user.username,
                    password: user.password,
                },
            );

            return {
                user: {
                    ...response.data,
                    ...token.data,
                },
                error: '',
            };
        } catch (error) {
            const err = error as AxiosError;

            return {
                user: {},
                error: err.response ? err.response.statusText : 'Network error',
            };
        }
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
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                registerUser.fulfilled,
                (state, action: PayloadAction<RegisterPayloadAction>) => {
                    const { user, error } = action.payload;

                    state.loading = false;
                    state.error = error;
                    state.user = {
                        username: user.username,
                        email: user.email,
                        password: user.password,
                        dateOfBirth: user.date_of_birth,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        authToken: user.auth_token,
                    };
                },
            )
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { user, error } = action.payload as LoginPayloadAction;

                state.loading = false;
                state.error = error;
                state.user = {
                    username: 'Test',
                    email: 'Test@gmail.com',
                    password: 'test123',
                    dateOfBirth: '23.12.2003',
                    firstName: 'Fedor',
                    lastName: 'Zubov',
                    authToken: user.auth_token,
                };
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
            });
    },
});

export default authSlice.reducer;
