import { configureStore } from "@reduxjs/toolkit"; 
import catsSlice from './catsReducer';

const store = configureStore({
    reducer: {
        cats: catsSlice,
    }    
})

export default store;