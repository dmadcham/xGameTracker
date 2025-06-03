import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectSingleGame, selectSingleGameStatus } from '../../redux/store/gameSlice';
import { useEffect } from 'react';
import { fetchAsyncGameDetails } from '../../redux/utils/gameUtils';
import { Breadcrumb, Preloader } from '../../components/common';
import { STATUS } from '../../utils/status';
import { GameDetails } from '../../components/game';
import { game_details_image } from '../../utils/images';

/**
 * Componente GameDetailsPage
 * 
 * @component
 * @description Este componente muestra los detalles de un juego específico. Utiliza Redux para gestionar el estado del juego y su carga. Al cargar la página, se realiza una solicitud para obtener los detalles del juego basado en el ID proporcionado en la URL. Si los datos están siendo cargados, se muestra un preloader; de lo contrario, se muestran los detalles del juego.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la página de detalles de un juego.
 */
const GameDetailsPage = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const singleGameData = useSelector(selectSingleGame);
  const singleGameStatus = useSelector(selectSingleGameStatus);

  useEffect(() => {
    dispatch(fetchAsyncGameDetails(gameId));
  }, [gameId]);

  const gameNameById = {
    // Para mandar tanto el ID como el nombre
    [singleGameData.id] : singleGameData.name
  }

  return (
    <GameDetailsPageWrapper>
      <div className='sc-details' style = {{
        background: `linear-gradient(0deg, rgba(16, 14, 43, 0.8), rgba(16, 14, 43, 0.8)), url(${game_details_image}) center/cover no-repeat`
      }}>
        <div className='container'>
          <Breadcrumb dataNameById = { gameNameById } />
          {
            singleGameStatus === STATUS.LOADING ? <Preloader /> : <GameDetails gameData = { singleGameData } /> 
          }
        </div>
      </div>
    </GameDetailsPageWrapper>
  )
}

export default GameDetailsPage;

/**
 * Estilos para el componente GameDetailsPage
 * 
 * @description Este styled-component define los estilos para la página de detalles del juego. Asegura que la página tenga una altura mínima del 100% de la ventana y un relleno adecuado en la parte superior e inferior.
 * @returns {StyledComponent} El componente estilizado que representa la página de detalles del juego.
 * 
 */
const GameDetailsPageWrapper = styled.div`
  .sc-details{
    min-height: 100vh;
    padding-top: 65px;
    padding-bottom: 65px;
  }
`;
