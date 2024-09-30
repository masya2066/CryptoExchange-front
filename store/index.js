import { configureStore } from '@reduxjs/toolkit';
import authSlice from "@/store/authSlice";
import userSlice from "@/store/userSlice";

export const store = configureStore({
    reducer: {
        authSlices: authSlice,
        userSlices: userSlice
    },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;