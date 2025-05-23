import styled from "styled-components";
import { GameList } from "../game";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllFavorites,
  selectAllFavoritesStatus,
  selectSingleFavorite,
  selectSingleFavoriteStatus,
} from "../../redux/store/favSlice";
import { useEffect } from "react";
import { fetchAsyncFavorites, fetchAsyncFavoritesDetails } from "../../redux/utils/favUtils";
import { STATUS } from "../../utils/status";
import { Preloader } from "../common";
import { Link } from "react-router-dom";
import Pagination from "../common/Pagination";
import { useState } from "react";

const ITEMS_PER_PAGE = 6;

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectAllFavorites);
  const favoritesStatus = useSelector(selectAllFavoritesStatus);
  const favoriteDetails = useSelector(selectSingleFavorite);
  const favoriteDetailsStatus = useSelector(selectSingleFavoriteStatus);
  const [page, setPage] = useState(1);

  // Lógica de paginación
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedFavorites = favoriteDetails.slice(startIdx, endIdx);
  const totalPages = Math.ceil(favoriteDetails.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => setPage(newPage);


  useEffect(() => {
    dispatch(fetchAsyncFavorites());
  }, [dispatch]);

  useEffect(() => {
    if (favorites.length > 0) {
      dispatch(fetchAsyncFavoritesDetails(favorites));
    }
  }, [favorites, dispatch]);


  const renderedFavoriteGames = (
    <>
      <GameList sliceValue={6} games={paginatedFavorites} />
      {
        totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              pageHandler={handlePageChange}
              nextPage={page < totalPages ? page + 1 : null}
              prevPage={page > 1 ? page - 1 : null}
              currentPage={page}
            />            
          </div>
        )
      }
    </>
  );

  return (
    <FavoritesWrapper>
      <div className="container">
        {favoritesStatus === STATUS.LOADING || favoriteDetailsStatus === STATUS.LOADING ? (
          <Preloader />
        ) : favoriteDetails.length > 0 ? (
          renderedFavoriteGames
        ) : (
          <p className="text-white lead-text text-center">
            Aún no tienes ningún juego favorito.
          </p>
          
        )}
        <div className="d-flex justify-content-center mt-4">
        <Link to="/games" className="section-btn">
          Añadir más juegos
        </Link>
      </div>
      </div>
    </FavoritesWrapper>
  );
};

export default Favorites;

const FavoritesWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;
