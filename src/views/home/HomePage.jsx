import styled from "styled-components";
import {
  Banner,
  ImageSlider,
  Preloader,
  Tabs,
  Title,
} from "../../components/common/index";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllGames,
  selectAllGamesStatus,
} from "../../redux/store/gameSlice";
import { useEffect } from "react";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { STATUS } from "../../utils/status";
import { GameList } from "../../components/game/index";
import { Link } from "react-router-dom";
import { join_image, store_image } from "../../utils/images";
import {
  selectAllGenres,
  selectAllGenresStatus,
} from "../../redux/store/genreSlice";
import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
import {
  selectAllStores,
  selectAllStoresStatus,
} from "../../redux/store/storeSlice";
import { StoreList } from "../../components/store/index";
import { fetchAsyncStores } from "../../redux/utils/storeUtils";

/**
 * Componente HomePage
 * 
 * @component
 * @description Este componente representa la página de inicio de la aplicación. Muestra un banner, una lista de juegos populares, una sección para unirse a la comunidad, una lista de juegos filtrados por género y una lista de tiendas. Utiliza Redux para gestionar el estado de los juegos, géneros y tiendas, y realiza solicitudes asíncronas para obtener estos datos al cargar la página.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la página de inicio de la aplicación, incluyendo un banner, una lista de juegos populares, una sección para unirse a la comunidad, una lista de géneros y una lista de tiendas.
 */
const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const genres = useSelector(selectAllGenres);
  const genresStatus = useSelector(selectAllGenresStatus);
  const stores = useSelector(selectAllStores);
  const storesStatus = useSelector(selectAllStoresStatus);

  useEffect(() => {
    dispatch(fetchAsyncGames());
    dispatch(fetchAsyncGenres());
    dispatch(fetchAsyncStores());
  }, []);


  const renderedPopularGames = (
    <>
      <GameList sliceValue={9} games={games} />
      <div className="d-flex justify-content-center">
        <Link to="/games" className="section-btn">
          Ver más juegos
        </Link>
      </div>
    </>
  );

  return (
    <HomeWrapper>
      <Banner />

      <section className="section sc-popular">
        <div className="container">
          <Title
            titleName={{
              firstText: "TOP",
              secondText: "populares",
            }}
          />
          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            renderedPopularGames
          ) : (
            <p className="text-white lead-text text-center">
              No se ha encontrado ningún juego. Prueba de nuevo más tarde.
            </p>
          )}
        </div>
      </section>

      <ImageSlider />

      <section
        className="section sc-join d-flex align-items-center"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${join_image}) center/cover no-repeat`,
        }}
      >
        <div className="container w-100">
          <div className="join-content text-white mx-auto text-center">
            <h2 className="join-title mb-3">
              {" "}
              ÚNETE A LA <span>COMUNIDAD</span>
            </h2>
            <p className="lead-text">
              {" "}
              Únete a nuestra comunidad de Discord, hecha por y para gamers.
              Todo el mundo es bienvenido, sin importar el juego al que juegues,
              estamos aquí para pasarlo en grande!
            </p>
            <Link to={"https://discord.com/invite/gT9JuNvTe8"}>
            <button type="button" className="section-btn mt-4">
              Unirse a discord
            </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section sc-genres">
        <div className="container">
          <Title
            titleName={{
              firstText: "Top",
              secondText: "Géneros",
            }}
          />
        </div>
        {genresStatus === STATUS.LOADING ? (
          <Preloader />
        ) : genres?.length > 0 ? (
          <Tabs sliceValue={9} data={genres} />
        ) : (
          <p className="text-white lead-text text-center">
            No se ha encontrado ningún género. Prueba de nuevo más tarde.
          </p>
        )}
      </section>

      <section
        className="section sc-stores"
        style={{
          background: `linear-gradient(180deg, rgba(12, 10, 36, 0.73) 0%, rgba(0, 0, 0, 0.73) 72.92%), url(${store_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <Title
            titleName={{
              firstText: "Top",
              secondText: "Tiendas",
            }}
          />
          {storesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : stores?.length > 0 ? (
            <StoreList stores={stores} />
          ) : (
            <p className="text-white lead-text text-center">
              No se ha encontrado ninguna tienda. Prueba de nuevo más tarde.
            </p>
          )}
        </div>
      </section>
    </HomeWrapper>
  );
};

export default HomePage;

/**
 * Estilos para el componente HomePage
 * 
 * @description Este styled-component define los estilos para la página de inicio, incluyendo secciones para juegos populares, unirse a la comunidad, géneros y tiendas. Cada sección tiene su propio estilo y fondo, asegurando que el contenido sea visualmente atractivo y fácil de navegar.
 * @returns {StyledComponent} El componente estilizado que representa la página de inicio de la aplicación.
 */
const HomeWrapper = styled.div`
  .sc-popular {
    background-color: var(--clr-violet-dark-active);
    .section-btn {
      margin-top: 60px;
    }
  }

  .sc-join {
    min-height: 640px;

    .join-content {
      max-width: 600px;
    }

    .join-title {
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 44px;
      letter-spacing: 0.09em;

      span {
        color: var(--clr-blue-normal);
        font-family: var(--font-family-right);
      }
    }
  }

  .sc-genres {
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores {
    min-height: 841px;
  }
`;
