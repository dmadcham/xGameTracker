import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectAllCreators,
  selectAllCreatorsNextPage,
  selectAllCreatorsPrevPage,
  selectAllCreatorsStatus,
} from "../../redux/store/creatorSlice";
import { useEffect, useState } from "react";
import { fetchAsyncCreators } from "../../redux/utils/creatorUtils";
import { Pagination, Preloader, Title } from "../../components/common";
import { STATUS } from "../../utils/status";
import { CreatorList } from "../../components/creator";

/**
 * Componente CreatorAllPage
 * 
 * @component
 * @description Este componente muestra una lista de todos los creadores disponibles. Utiliza Redux para gestionar el estado de los creadores y su paginación. Al cargar la página, se realiza una solicitud para obtener los creadores y se muestra un preloader mientras se cargan los datos. Si hay creadores disponibles, se muestran en una lista con opciones de paginación.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la página de todos los creadores.
 */
const CreatorAllPage = () => {
  const dispatch = useDispatch();
  const creators = useSelector(selectAllCreators);
  const creatorsStatus = useSelector(selectAllCreatorsStatus);
  const nextPage = useSelector(selectAllCreatorsNextPage);
  const prevPage = useSelector(selectAllCreatorsPrevPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncCreators(page));
  }, [page]);

  const pageHandler = (pageValue) => setPage(pageValue);

  return (
    <CreatorAllPageWrapper>
      <div className="sc-creators section">
        <div className="container">
          <Title
            titleName={{
              firstText: "Los",
              secondText: "Creadores",
            }}
          />
          
          {creatorsStatus === STATUS.LOADING ? (
            <Preloader />
          ) : creators?.length > 0 ? (
            <>
              <CreatorList creators={creators} />
              <Pagination
                pageHandler={pageHandler}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={page}
              />
            </>
          ) : (
            <p className="text-white lead-text text-center">
              No se ha encontrado ningún creador. Prueba de nuevo más tarde.
            </p>
          )}
        </div>
      </div>
    </CreatorAllPageWrapper>
  );
};

export default CreatorAllPage;

/**
 * Estilos para el componente CreatorAllPage
 * 
 * @description Este styled-component define los estilos para el contenedor principal de la página de creadores. Establece un color de fondo y asegura que el contenido tenga un mínimo de altura para ocupar toda la pantalla.
 * @returns {StyledComponent} El componente estilizado para la página de creadores.
 */
const CreatorAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  .sc-creators {
    min-height: 100vh;
    padding-top: 65px;
  }
`;
