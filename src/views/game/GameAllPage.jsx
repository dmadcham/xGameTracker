import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectAllGames,
  selectAllGamesStatus,
  selectGamesNextPage,
  selectGamesPreviousPage,
} from "../../redux/store/gameSlice";
import { useEffect, useState } from "react";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { STATUS } from "../../utils/status";
import { Title, Preloader, Pagination } from "../../components/common/index";
import { GameList } from "../../components/game";

const GameAllPage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const nextPage = useSelector(selectGamesNextPage);
  const prevPage = useSelector(selectGamesPreviousPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [page]);

  const pageHandler = (pageValue) => setPage(pageValue);

  return (
    <GameAllPageWrapper>
      <div className="sc-games section">
        <div className="container">
          <Title
            titleName={{
              firstText: "todos los",
              secondText: "juegos",
            }}
          />

          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            <>
              <GameList games={games} />
              <Pagination
                pageHandler={pageHandler}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={page}
              />
            </>
          ) : (
            <p className="text-white lead-text text-center">
              No se ha encontrado ningún juego. Prueba de nuevo más tarde.
            </p>
          )}
        </div>
      </div>
    </GameAllPageWrapper>
  );
};

export default GameAllPage;

const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games {
    min-height: 100vh;
    padding-top: 65px;
  }
`;
