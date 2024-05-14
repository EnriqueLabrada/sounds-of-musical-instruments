import { configureStore } from '@reduxjs/toolkit'
import guitarraReducer from './Slices/guitarraSlice'

export const store = configureStore({
    reducer: {
        guitarra: guitarraReducer,
    }
})