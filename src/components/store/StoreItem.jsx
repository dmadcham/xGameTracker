import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Componente StoreItem
 * 
 * @description Este componente muestra un elemento de tienda con su imagen, nombre, dominio, número de juegos y una lista de juegos asociados. Incluye enlaces para ver más detalles de la tienda y de los juegos.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.storeItem - Un objeto que representa un elemento de tienda, debe contener propiedades como `id`, `name`, `image_background`, `domain`, `games_count`, y `games` (un array de juegos).
 * 
 * @returns {JSX.Element} Un elemento JSX que representa un elemento de tienda estilizado. 
 */
const StoreItem = ({ storeItem }) => {
  return (
    <StoreItemWrapper className="card d-grid">
      <div className="card-img img-fit-cover">
        <img src={storeItem?.image_background} alt={storeItem?.name} />
      </div>
      <div className="card-text d-flex flex-column justify-content-center">
        <h5 className="card-title text-uppercase fw-7">
          <Link className="text-white" to={`/stores/${storeItem.id}`}>
            {storeItem?.name}
          </Link>
        </h5>
        <ul className="card-info">
            <li>
                <span className="fw-7">Dominio: </span>
                <a href={ "https://" + storeItem?.domain}>{ storeItem?.domain }</a>
            </li>
            <li>
                <span className="fw-7">Juegos: </span>
                { storeItem?.games_count }
            </li>
        </ul>
        <br />
        <ul className="card-games d-flex flex-wrap">
            {storeItem?.games?.map(item => {
                return (
                    <li className="card-game" key={item.id}>
                        <Link to= {`/games/${item.id}`}>{item.name}</Link>
                    </li>
                )
            })}
        </ul>
      </div>
    </StoreItemWrapper>
  );
};

export default StoreItem;

StoreItem.propTypes = {
  storeItem: PropTypes.object,
};

/**
 * Estilos del componente StoreItem
 * 
 * @component
 * @description Este styled-component define los estilos para el componente StoreItem, incluyendo el diseño del contenedor, la imagen de la tienda, el título, la información y la lista de juegos.
 * @returns {StyledComponent} El componente estilizado para el StoreItem.
 */
const StoreItemWrapper = styled.div`
  grid-template-columns: repeat(2, 1fr);
  min-height: 120px;
  margin: 16px 0;

  .card-text {
    padding: 16px;

    .card-title {
      letter-spacing: 0.04em;
      color: #0b082d;
      font-size: 16px;
      display: inline-block;
      transition: var(--transition-default);

      &:hover {
        color: #000;
        opacity: 0.9;
      }
    }

    .card-info {
      li {
        /* color: #050415; */
        color: #fff;

        a {
          color: #fff;
        }
      }
    }

    .card-games {
      gap: 8px;
      li {
        background-color: #b9198e;
        border-radius: 100vh;
        padding-right: 8px;
        padding-left: 8px;
        height: 23px;

        * {
          font-weight: 500;
          color: var(--clr-violet-darker);
        }

        a {
          color: var(--clr-white);
          font-size: 13px;
          display: inline-block;
          transform: translateY(-3px);
          font-style: italic;
        }
      }
    }
  }
`;
