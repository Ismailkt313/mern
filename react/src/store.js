import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice"


const store = configureStore({
    reducer: {
        couters:counterSlice
    }
})
export default store
