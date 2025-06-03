import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllStores, selectAllStoresStatus } from '../../redux/store/storeSlice';
import { useEffect } from 'react';
import { fetchAsyncStores } from '../../redux/utils/storeUtils';
import { Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import { StoreList } from '../../components/store';

/**
 * Componente StoreAllPage
 * 
 * @component
 * @description Este componente muestra una lista de todas las tiendas disponibles. Utiliza Redux para gestionar el estado de las tiendas y su carga. Al cargar la página, se realiza una solicitud para obtener las tiendas y se muestra un preloader mientras se cargan los datos. Si hay tiendas disponibles, se muestran en una lista.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la página de todas las tiendas.
 */
const StoreAllPage = () => {
  const dispatch = useDispatch();
  const stores = useSelector(selectAllStores);
  const storesStatus = useSelector(selectAllStoresStatus);

  useEffect(() => {
    dispatch(fetchAsyncStores());
  }, []);

  return (
    <StoreAllPageWrapper>
      <div className='sc-stores section'>
        <div className='container'>
          <Title titleName = {{
            firstText: "Todas las",
            secondText: "Tiendas"
          }}></Title>
          {
            storesStatus === STATUS.LOADING ? <Preloader /> : stores?.length > 0 ? <>
              <StoreList stores={stores}></StoreList>
            </> : <p className='text-white lead-text text-center'>No se ha encontrado ninguna tienda. Prueba de nuevo más tarde.</p>
          }
        </div>
      </div>
    </StoreAllPageWrapper>
  )
}

export default StoreAllPage;

/**
 * Estilos para el componente StoreAllPage
 * 
 * @description Este styled-component define los estilos para la página de todas las tiendas. Asegura que la página tenga un fondo oscuro y un relleno adecuado en la parte superior.
 * @returns {StyledComponent} El componente estilizado que representa la página de todas las tiendas.
 */
const StoreAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  .sc-stores{
    min-height: 100vh;
    padding-top: 65px;
  }
`;
