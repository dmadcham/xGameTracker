import styled from "styled-components";
import PropTypes from "prop-types";
import CreatorItem from "./CreatorItem";

/**
 * Componente CreatorList
 * 
 * @component
 * @description Este componente muestra una lista de creadores de contenido. Cada creador se representa mediante el componente `CreatorItem`.
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.creators - Un array de objetos que representan a los creadores. Cada objeto debe tener un `id`, `name`, `image`, `image_background`, `games_count`, `positions`, y `games`.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la lista de creadores estilizada.
 */
const CreatorList = ({ creators }) => {
  return (
    <CreatorListWrapper>
      <div className="card-list">
        {creators?.map((item) => (
          <CreatorItem key={item.id} creatorItem={item} />
        ))}
      </div>
    </CreatorListWrapper>
  );
};

export default CreatorList;

CreatorList.propTypes = {
  creators: PropTypes.array,
};

/**
 * Estilos del componente CreatorList
 * 
 * @description Este styled-component define los estilos para el componente CreatorList, incluyendo el margen superior para separar la lista de creadores del contenido anterior.
 * @returns {StyledComponent} El componente estilizado para la lista de creadores.
 */
const CreatorListWrapper = styled.div`
  margin-top: 140px;
`;
