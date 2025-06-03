import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Componente StoreDetails
 * 
 * @component
 * 
 * @description Este componente muestra los detalles de una tienda, incluyendo su imagen de fondo, nombre, dominio, número de juegos y una descripción.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.storeData - Un objeto que representa los datos de la tienda. Debe contener propiedades como `id`, `name`, `image_background`, `domain`, `games_count` y `description`.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa los detalles de la tienda estilizados.
 */
const StoreDetails = ({ storeData }) => {
  return (
    <StoreDetailsWrapper>
      <div className='details-grid d-grid'>
        <div className='details-left img-fit-cover'>
          <img src={`${storeData?.image_background}`} alt={storeData?.name} />
        </div>

        <div className='details-right mt-4'>
          <h5 className='card-title text-uppercase fw-7'>
            <Link to = { `stores/${storeData.id}`} className='text-white'>
              {
                storeData?.name
              }
            </Link>
            
          </h5>
          <ul className='card-info'>
              <li>
                <span className='fw-7 text-white'>Dominio: </span>
                <a className='text-white' href={"https://" + storeData?.domain}>
                  {
                    storeData?.domain
                  }
                </a>
              </li>
              <li>
                <span className='fw-7 text-white'>Número de juegos: </span>
                <span className='text-white'>{storeData?.games_count}</span>
              </li>
            </ul>
            <div className='para-text' dangerouslySetInnerHTML={{__html:storeData?.description}}></div>
        </div>

      </div>
    </StoreDetailsWrapper>
  )
}

export default StoreDetails;

StoreDetails.propTypes = {
  storeData: PropTypes.object
}

/**
 * Estilos del componente StoreDetails
 * 
 * @description Este styled-component define los estilos para el componente StoreDetails, incluyendo el diseño del contenedor, la imagen de fondo, el título, la lista de información y la descripción.
 * @returns {StyledComponent} El componente estilizado para los detalles de la tienda.
 */
const StoreDetailsWrapper = styled.div`
  padding: 32px 0;

  .card-title{
    font-size: 32px;
    display: inline-block;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 992px){
    padding: 60px 0;

    .details-grid{
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      align-items: stretch;
    }
  }
`;
