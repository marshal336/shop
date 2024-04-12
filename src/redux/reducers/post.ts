import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardDto } from "~/types/card";
import { getData } from "~/utils/api-link";
import { IInitialState } from "./initialState";
type value = {
    id: number
}

const initialState: IInitialState = {
    post: null,
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
        builder.addCase(getPost.fulfilled, (state, { payload }) => {
            if (payload) {
                state.post = payload
                state.status = true;
            }
        })
        builder.addCase(getPost.rejected, (state) => {
            state.post = null
            state.status = false;

        })
    }
})


export default post.reducer