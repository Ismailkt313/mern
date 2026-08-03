import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice"


const store = configureStore({
    reducer: {
        counter:counter
    }
})