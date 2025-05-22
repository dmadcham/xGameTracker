import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";
import { gamesURL, favoritesURL } from "../../constants/apiURL";
import axios from "../../api/axios";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncFavorites = createAsyncThunk(
  "favorites/fetch",
  async () => {
    const token = localStorage.getItem("token");
    console.log("Token usado:", token);
    const { data } = await authApi.get(`${favoritesURL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Respuesta del backend (IDs favoritos):", data);

    return data.map((row) => row.game_id);
  }
);

export const fetchAsyncFavoritesDetails = createAsyncThunk(
  "favorites/details/fetch",
  async (favId) => {
    const req = favId.map((id) => axios.get(`${gamesURL}/${id}?${API_KEY}`));

    const res = await Promise.all(req);
    return res.map((r) => r.data);
  }
);

export const addFavorite = createAsyncThunk("favorites/add", async (gameId) => {
  const token = localStorage.getItem("token");
  console.log("Token usado:", token);
  const { data } = await authApi.post(
    `${favoritesURL}`,
    { gameId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("Respuesta del backend (favorito añadido):", data);
  return data;
});

export const removeFavorite = createAsyncThunk(
  "favorites/remove",
  async (gameId) => {
    const token = localStorage.getItem("token");
    console.log("Token usado:", token);
    const { data } = await authApi.delete(`${favoritesURL}/${gameId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Respuesta del backend (favorito eliminado):", data);
    return data;
  }
);
