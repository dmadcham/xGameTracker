import styled from "styled-components";
import GameItem from "./GameItem";
import PropTypes from "prop-types";

/**
 * Componente GameList
 * 
 * @component
 * @description Este componente muestra una lista de juegos. Cada juego se representa mediante el componente `GameItem`. Permite mostrar un número limitado de juegos utilizando la propiedad `sliceValue`.
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.games - Un array de objetos que representan los juegos. Cada objeto debe tener un `id`, `name`, `image`, `rating`, `platforms`, y `genres`.
 * @param {number} [props.sliceValue=games.length] - Un número que indica cuántos juegos mostrar. Si no se proporciona, se mostrarán todos los juegos disponibles en el array `games`.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la lista de juegos estilizada.
 */
const GameList = ({ games, sliceValue = games.length }) => {
  // Por defecto se muestran todos los juegos obtendios de la API si sliceValue no tiene valor
  return (
    <GameListWrapper>
      <div className="card-list">
        {games?.slice(0, sliceValue).map((item) => (
          <GameItem key={item.id} gameItem={item} />
        ))}
      </div>
    </GameListWrapper>
  );
};

export default GameList;

GameList.propTypes = {
  games: PropTypes.array,
  sliceValue: PropTypes.number,
};

/**
 * Estilos del componente GameList
 * @description Este styled-component define los estilos para el componente GameList.
 * 
 * @returns {StyledComponent} El componente estilizado para la lista de juegos.
 */
const GameListWrapper = styled.div``;
