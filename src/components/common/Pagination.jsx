import styled from "styled-components";
import PropTypes from "prop-types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/**
 * Componente de Paginación
 * 
 * @component
 * @description Este componente maneja la paginación de una lista de elementos, permitiendo navegar entre páginas.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Function} props.pageHandler - Función para manejar el cambio de página.
 * @param {string} props.nextPage - URL de la siguiente página.
 * @param {string} props.prevPage - URL de la página anterior.
 * @param {number} props.currentPage - Número de la página actual. 
 * @return {JSX.Element} Un elemento JSX que representa los botones de paginación.
 */
const Pagination = ({ pageHandler, nextPage, prevPage, currentPage }) => {
  const pageNextHandler = () => {
    if (nextPage !== null) pageHandler(++currentPage);
  };

  const pagePrevHandler = () => {
    if (prevPage !== null) pageHandler(--currentPage);
  };

  return (
    <PaginationWrapper className="d-flex align-items-center justify-content-center">
      <button
        type="button"
        className={`prev-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          prevPage === null ? "disabled" : ""
        }`}
        disabled={prevPage === null ? true : false}
        onClick={pagePrevHandler}
      >
        <FaArrowLeft  className="me-3" /> Prev
      </button>

      <button
        type="button"
        className={`next-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          nextPage === null ? "disabled" : ""
        }`}
        disabled={nextPage === null ? true : false}
        onClick={pageNextHandler}
      >
        Next <FaArrowRight  className="ms-3" />
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;

Pagination.PropTypes = {
  pageHandler: PropTypes.func,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  currentPage: PropTypes.number,
};

/**
 * Estilos del componente Pagination
 * 
 * @description Este styled-component define los estilos para el componente de paginación, incluyendo los botones de navegación y su disposición.
 * @returns {JSX.Element} Un elemento JSX que representa un contenedor para los botones de paginación.
 */
const PaginationWrapper = styled.div`
  margin-top: 48px;
  .prev-btn,
  .next-btn {
    margin: 0 16px;
    font-size: 18px;
    letter-spacing: 2px;
  }

  .disabled {
    opacity: 0.6;
  }
`;
