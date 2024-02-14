import {createSlice} from "@reduxjs/toolkit";

interface UserState {
    loading: boolean,
    userInfo: object,
    userToken: string | null;
    error: string | null;
    success: boolean;
}

const initialState: UserState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export default userSlice.reducer;
export const {} = userSlice.actions;