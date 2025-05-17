import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllStores, selectAllStoresStatus } from '../../redux/store/storeSlice';
import { useEffect } from 'react';
import { fetchAsyncStores } from '../../redux/utils/storeUtils';
import { Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import { StoreList } from '../../components/store';

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

const StoreAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  .sc-stores{
    min-height: 100vh;
    padding-top: 65px;
  }
`;
