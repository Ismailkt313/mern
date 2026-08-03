import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,

        decrement: (state) => state - 1,

        setValue: (state, action) => action.payload,
    },
});

export const { increment, decrement, setValue } = counter.actions;

export default counter.reducer;