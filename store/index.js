import { configureStore } from '@reduxjs/toolkit';
import authSlice from "@/store/authSlice";

export const store = configureStore({
    reducer: {
        authSlices: authSlice
    },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;