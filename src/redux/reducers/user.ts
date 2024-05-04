import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserState, SignUp } from "./initialState";
import { ErrorCatch } from "~/utils/error";
import { instance } from "~/api/instance";

const initialState: IUserState = {
    user: null,
    token: '',
    isAuth: false
}
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
export const logout = createAsyncThunk('logout', async () => {
    try {
        const { data } = await instance.post<IUser>('/auth/log-out')
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
    reducers: {
        resetAllInfoOnUser: (state) => {
            state.isAuth = false
            state.token = ''
            state.user = null
        },
        addUserGoogle: (state, { payload }: PayloadAction<any>) => {
            if (payload) {
                state.user = payload,
                    state.isAuth = true
            }
        }
    },
    extraReducers: (builder) => {
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
        builder.addCase(logout.fulfilled, (state) => {
            state.user = null
            state.isAuth = false
            state.token = ''
        })
    },
})
export const { resetAllInfoOnUser, addUserGoogle } = user.actions
export default user.reducer