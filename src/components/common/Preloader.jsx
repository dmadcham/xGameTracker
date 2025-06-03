import styled from 'styled-components';
import { loader } from '../../utils/images';

/**
 * Componente Preloader
 * 
 * @component
 * @description Este componente muestra un preloader animado mientras se cargan los datos de la aplicación.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa un preloader.
 */
const Preloader = () => {
  return (
    <PreloaderWrapper className='d-flex align-items-center justify-content-center'>
      <img src= { loader } alt="preloader" />
    </PreloaderWrapper>
  )
}

export default Preloader;

/**
 * Estilos del componente Preloader
 * 
 * @description Este styled-component define los estilos para el preloader, incluyendo el tamaño máximo de la imagen.
 * @returns {StyledComponent} El componente estilizado para el preloader.
 */
const PreloaderWrapper = styled.div`
  img{
    max-width: 120px;
  }
`;
