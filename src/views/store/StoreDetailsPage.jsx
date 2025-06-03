import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  selectSingleStore,
  selectSingleStoreStatus,
} from "../../redux/store/storeSlice";
import { useEffect } from "react";
import { fetchAsyncStoresDetails } from "../../redux/utils/storeUtils";
import { Breadcrumb, Preloader } from "../../components/common";
import { STATUS } from "../../utils/status";
import { StoreDetails } from "../../components/store";

/**
 * Componente StoreDetailsPage
 * 
 * @component
 * @description Este componente muestra los detalles de una tienda específica. Utiliza Redux para gestionar el estado de la tienda y su carga. Al cargar la página, se realiza una solicitud para obtener los detalles de la tienda basada en el ID proporcionado en la URL. Si los datos están siendo cargados, se muestra un preloader; de lo contrario, se muestran los detalles de la tienda.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la página de detalles de una tienda.
 */
const StoreDetailsPage = () => {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const singleStoreData = useSelector(selectSingleStore);
  const singleStoreStatus = useSelector(selectSingleStoreStatus);

  useEffect(() => {
    dispatch(fetchAsyncStoresDetails(storeId));
  }, [storeId]);


  const storeNameById = {
    [singleStoreData.id]: singleStoreData.name,
  };

  return (
    <StoreDetailsPageWrapper>
      <div className="sc-details">
        <div className="container">
          <Breadcrumb dataNameById={storeNameById} />

          {singleStoreStatus === STATUS.LOADING ? (
            <Preloader />
          ) : (
            <StoreDetails storeData={singleStoreData} />
          )}
        </div>
      </div>
    </StoreDetailsPageWrapper>
  );
};

export default StoreDetailsPage;

/**
 * Estilos para el componente StoreDetailsPage
 * 
 * @description Este styled-component define los estilos para la página de detalles de la tienda. Asegura que la página tenga un fondo oscuro y un relleno adecuado en la parte superior e inferior.
 * @returns {StyledComponent} El componente estilizado que representa la página de detalles de la tienda.
 */
const StoreDetailsPageWrapper = styled.div`
  background: var(--clr-violet-dark-active);

  .sc-details {
    min-height: 100vh;
    padding-top: 65px;
    padding-bottom: 65px;
  }
`;
