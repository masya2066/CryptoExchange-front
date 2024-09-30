import { createSlice } from '@reduxjs/toolkit';

const userSlices = createSlice({
    name: 'user',
    initialState: {
        isUser: "",
    },
    reducers: {
        infoUser(state, action) {
            state.isUser = action.payload.isUser;
        },
    },
});

export const { infoUser } = userSlices.actions;
export default userSlices.reducer;