// app/components/Providers.js
"use client";


import store from "@/store";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

export default function Providers({ children }) {
    return <Provider store={store}>
        {children}
    </Provider>;
}
