import { createSlice } from '@reduxjs/toolkit';

const authSlices = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
    },
    reducers: {
        authStatus(state, action) {
            state.isAuth = action.payload.isAuth;
        },
    },
});

export const { authStatus } = authSlices.actions;
export default authSlices.reducer;