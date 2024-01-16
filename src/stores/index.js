import { configureStore } from "@reduxjs/toolkit"; 
import catsSlice from './catsSlice';

const store = configureStore({
    reducer: {
        cats: catsSlice,
    }    
})

export default store;