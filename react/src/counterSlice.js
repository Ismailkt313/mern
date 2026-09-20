import { createSlice } from "@reduxjs/toolkit"


const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count:0
    },
    reducers: {
        inc(val) {
            val.count += 1
            return
        },
        dec(val) {
            val.count -= 1
            return
        },
        update(state, action) {
            let val = action.payload
            state.count += val
            return
        }
    }
})
export const { inc, dec, update } = CounterSlice.actions
export default CounterSlice.reducer