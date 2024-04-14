import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardDto } from "~/types/card";
import { getData } from "~/utils/api-link";
import { IInitialState } from "./initialState";
import { RootState } from '../store';
type value = {
    id: number
}

const initialState: IInitialState = {
    post: [],
    status: false,
    totalPrice: 0,
    count: 0,
}

export const getPost = createAsyncThunk('getPost', async (id: number) => {
    const data = await getData.getDataById(id)
    return data

})


const post = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPost.pending, (state) => {
            state.status = false
        })
        builder.addCase(getPost.fulfilled, (state,action) => {
            if (action.payload) {
                state.post.push(action.payload)
                state.status = true;
            }
        })
        builder.addCase(getPost.rejected, (state) => {
            state.status = false;

        })
    }
})

export const selectPost = (state: RootState) => state.post.post;
export default post.reducer