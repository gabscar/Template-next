import {createSlice} from '@reduxjs/toolkit'

let initialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      let newAdd = action.payload;
      console.log(action.payload)
      state.count += newAdd
    },
  }
})

export const CounterActions = counterSlice.actions

export default counterSlice;