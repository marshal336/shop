import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardDto, IAddCardDto } from "~/types/card";
import { getData } from "~/utils/api-link";
import { IInitialState, IUser, IUserState, SignUp } from "./initialState";
import { RootState } from '../store';
import { ErrorCatch } from "~/utils/error";
import { instance } from "~/api/instance";

const initialState: IUserState = {
    user: null,
    token: '',
    isAuth: false
}

export const getUser = createAsyncThunk('getUser', async ({ credential }: { credential?: string }) => {
    try {
        const { data } = await instance.post<IUser>('/auth/google/log-in', {
            token: credential
        }, {
            headers: {
                Authorization: 'ddd'
            }
        })
        return data
    } catch (error) {
        const message = ErrorCatch(error)
        return message
    }
})

export const createUser = createAsyncThunk('createUser', async (value: SignUp) => {
    try {
        const { data } = await instance.post<IUser>('/auth/sign-up', value)
        console.log(data);
        
        return data
    } catch (error) {
        const m = ErrorCatch(error)
        return m
    }
})
export const loginUser = createAsyncThunk('loginUser', async (value: Omit<SignUp, 'firstName'>) => {
    try {
        const { data } = await instance.post<IUser>('/auth/log-in', value)
        console.log(data);
        return data
    } catch (error) {
        const m = ErrorCatch(error)
        return m
    }
})

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.user = null
            state.isAuth = false
        })
        builder.addCase(getUser.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
            state.user = payload
            if (payload) {
                state.token = payload.accessToken
            }
            state.isAuth = true
        })
        builder.addCase(getUser.rejected, (state) => {
            state.user = null
            state.isAuth = false
        })
        builder.addCase(createUser.pending, (state) => {
            state.user = null
            state.isAuth = false
        })
        builder.addCase(createUser.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
            state.user = payload
            if (payload) {
                state.token = payload.accessToken
            }
            state.isAuth = true
        })
        builder.addCase(createUser.rejected, (state) => {
            state.user = null
            state.isAuth = false
        })
        builder.addCase(loginUser.pending, (state) => {
            state.user = null
            state.isAuth = false
        })
        builder.addCase(loginUser.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
            state.user = payload
            if (payload) {
                state.token = payload.accessToken
            }
            state.isAuth = true
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.user = null
            state.isAuth = false
        })
    },
})

export default user.reducer