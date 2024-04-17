import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddFavoriteDto } from "~/types/card";
import { IFavoriteState } from "./initialState";
import { RootState } from "../store";

const initialState: IFavoriteState = {
  favoriteItem: [],
  status: false,
  count: 0,
  isActive: false
};

const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<IAddFavoriteDto>) => {
      const exist = state.favoriteItem.some((item) => item.id === payload.id);
      if (exist) {
        state.favoriteItem = state.favoriteItem.filter((item)=>item.id !==payload.id)
      } else {
        state.favoriteItem.push({ ...payload });
        state.count = 1
      }
    },
    deleteFavorite: (state, { payload }: PayloadAction<number>) => {
      state.favoriteItem = state.favoriteItem.filter(item => item.id !== payload);
    },
    resetAllFavorite: (state) => {
      state.count = 0
      state.favoriteItem = []
      state.isActive = false
      state.status = false
    }
  },
});

export const favoritesItems = (state: RootState) => state.favorite.favoriteItem;
export const { addFavorite, deleteFavorite, resetAllFavorite } = favorite.actions;
export default favorite.reducer;
