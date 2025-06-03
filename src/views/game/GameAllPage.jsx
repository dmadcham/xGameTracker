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

/**
 * Componente GameAllPage
 * 
 * @component
 * @description Este componente muestra una lista de todos los juegos disponibles. Utiliza Redux para gestionar el estado de los juegos y su paginación. Al cargar la página, se realiza una solicitud para obtener los juegos y se muestra un preloader mientras se cargan los datos. Si hay juegos disponibles, se muestran en una lista con opciones de paginación.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la página de todos los juegos.
 */
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

/**
 * Estilos para el componente GameAllPage
 * 
 * @description Este styled-component estiliza la página de todos los juegos, asegurando que tenga un fondo adecuado y un relleno en la parte superior para que el contenido se muestre correctamente. Esto garantiza que la página sea visualmente atractiva y funcional en diferentes dispositivos y tamaños de pantalla.
 * @returns {StyledComponent} El componente estilizado que representa la página de todos los juegos.
 */
const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games {
    min-height: 100vh;
    padding-top: 65px;
  }
`;
