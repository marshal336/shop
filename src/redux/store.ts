
import { configureStore, } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import post from './reducers/post'


const store = () => {
    return configureStore({
        reducer: {
            post
        }
    })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export const useAppDispatch: () => AppStore['dispatch'] = useDispatch
export default store