import {configureStore} from '@reduxjs/toolkit';
import  counterSlice  from './Slices/couter-slice';
  
export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
    }
})