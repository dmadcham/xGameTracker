import styled from "styled-components";
import PropTypes from "prop-types";
import StoreItem from "./StoreItem";

/**
 * Componente StoreList
 * 
 * @component
 * @description Este componente muestra una lista de tiendas, cada una representada por el componente `StoreItem`. Las tiendas se presentan en un diseño de cuadrícula.
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.stores - Un array de objetos que representan las tiendas. Cada objeto debe tener un `id`, `name`, `image`, y `games_count`.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la lista de tiendas estilizada. 
 */
const StoreList = ({ stores }) => {
  return (
    <StoreListWrapper>
      <div className="store-list d-grid">
        {stores?.map((item) => (
          <StoreItem key={item.id} storeItem={item} />
        ))}
      </div>
    </StoreListWrapper>
  );
};

export default StoreList;

StoreList.propTypes = {
  stores: PropTypes.array,
};

/**
 * Estilos del componente StoreList
 * 
 * @description Este styled-component define los estilos para el componente StoreList, incluyendo el diseño de cuadrícula para las tiendas y la adaptación a diferentes tamaños de pantalla.
 * @returns {StyledComponent} El componente estilizado para la lista de tiendas.
 */
const StoreListWrapper = styled.div`
  .store-list {
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 32px;
    }
  }
`;
