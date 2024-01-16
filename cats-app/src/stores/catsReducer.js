import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "live_Sy1mfBh7yqj2Lligg1ciWomF8bpaJnq4QvzWxNcDl9VMaVZAFYv9TeEc1aNWWN3e";

export const fetchCats = createAsyncThunk(
    'cats/fetchCats',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=10', {
                headers: {
                    "x-api-key": apiKey,
                },
            });
    
            if (!response.ok) {
                throw new Error('Ошибка на сервере');
            }

            const data = await response.json();
    
            return data;
        } catch (error) {
            return rejectWithValue(error.message);    
        }
    }
);

const initialState = {
    cats: [],
    loading: false,
    error: '',
    favourites: [],
}

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        removeCat(state, action) {
            state.cats = state.cats.filter(cat => cat.id !== action.payload.id);
            state.favourites = state.favourites.filter(cat => cat.id !== action.payload.id);
        },
        likeCat(state, action) {
            const favourite = state.cats.find(cat => cat.id === action.payload.id);
            state.favourites.push(favourite);
        },
        unlikeCat(state, action) {
            state.favourites = state.favourites.filter(cat => cat.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCats.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchCats.fulfilled, (state, action) => {
            state.loading = false;
            state.cats = action.payload;
            state.error = '';
        })
        builder.addCase(fetchCats.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
})

export const {removeCat, likeCat, unlikeCat} = catsSlice.actions; 

export default catsSlice.reducer;