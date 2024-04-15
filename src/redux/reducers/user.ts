import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardDto, IAddCardDto } from "~/types/card";
import { getData } from "~/utils/api-link";
import { IInitialState, IUser, IUserState } from "./initialState";
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
    },
})

export default user.reducer