import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncFavorites, fetchAsyncFavoritesDetails } from "../utils/favUtils";
import { STATUS } from "../../utils/status";

const initialState = {
  favorites: [],
  favoritesStatus: STATUS.IDLE,
  favoritesSingle: [],
  favoritesSingleStatus: STATUS.IDLE,
};

const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.favorites = [];
      state.favoritesStatus = STATUS.IDLE;
      state.favoritesSingle = [];
      state.favoritesSingleStatus = STATUS.IDLE;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncFavorites.pending, (state) => {
      state.favoritesStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.favoritesStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncFavorites.rejected, (state) => {
      state.favoritesStatus = STATUS.FAILED;
    });

    builder.addCase(fetchAsyncFavoritesDetails.pending, (state) => {
      state.favoritesSingleStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncFavoritesDetails.fulfilled, (state, action) => {
      state.favoritesSingle = action.payload;
      state.favoritesSingleStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncFavoritesDetails.rejected, (state) => {
      state.favoritesSingleStatus = STATUS.FAILED;
    });
  },
});

export const selectAllFavorites = (state) => state.favorites.favorites;
export const selectAllFavoritesStatus = (state) => state.favorites.favoritesStatus;
export const selectSingleFavorite = (state) => state.favorites.favoritesSingle;
export const selectSingleFavoriteStatus = (state) => state.favorites.favoritesSingleStatus;

export const { clearFavorites } = favSlice.actions;

export default favSlice.reducer;
