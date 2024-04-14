import { configureStore, } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import post from './reducers/post'
import favorite from './reducers/favorite'


const store = configureStore({
    reducer: {
        post,
        favorite
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store