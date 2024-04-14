import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardDto, IAddCardDto } from "~/types/card";
import { getData } from "~/utils/api-link";
import { IInitialState } from "./initialState";
import { RootState } from '../store';

const initialState: IInitialState = {
    post: [],
    status: false,
    totalPrice: 0,
    count: 0,
}

const post = createSlice({
    name: 'post',
    initialState,
    reducers: {
        add: (state, { payload }: PayloadAction<IAddCardDto>) => {
            const exist = state.post.find(el => el.id === payload.id)
            if (exist) {
                state.count++
                exist.count++
            } else {
                state.post.push({...payload, count: 1})
            }
            state.totalPrice = state.post.reduce((num, obj) => {
                return obj.count * +obj.prices + num;
            }, 0);
        },
    },
})

export const selectPost = (state: RootState) => state.post.post;
export const { add } = post.actions
export default post.reducer