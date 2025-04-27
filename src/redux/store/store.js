import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice";
import gameReducer from "./gameSlice";
import creatorReducer from "./creatorSlice";
import sidebarReducer from "./sidebarSlice";
import storeReducer from "./storeSlice";

const store = configureStore({
    reducer: {
        genre: genreReducer,
        game: gameReducer,
        creator: creatorReducer,
        sidebar: sidebarReducer,
        store: storeReducer,
    }

});

export default store;