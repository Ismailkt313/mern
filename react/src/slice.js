import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        incremet: (state) => state += 1,
        decrement: (state) => {
            return state -= 1
        },
        update: (state, action) => {
             return action.payload
        }
    }
})
export const { incremet, decrement, update } = slice.actions
export default slice.reducer