import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice";
import gameReducer from "./gameSlice";
import creatorReducer from "./creatorSlice";
import sidebarReducer from "./sidebarSlice";
import storeReducer from "./storeSlice";
import favReducer from "./favSlice";

const store = configureStore({
    reducer: {
        genre: genreReducer,
        game: gameReducer,
        creator: creatorReducer,
        sidebar: sidebarReducer,
        store: storeReducer,
        favorites: favReducer,
    }

});

export default store;