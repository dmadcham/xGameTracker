import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Componente PageNotFound
 * 
 * @description Este componente muestra una página de error 404 cuando la ruta solicitada no se encuentra. Incluye un mensaje de error y un enlace para volver al inicio.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa una página de error 404.
 */
const PageNotFound = () => {
  return (
    <PageNotFoundWrapper className='section'>
      <div className='container text-center'>
        <p className='value-404'>404</p>
        <p className='not-found-text text-uppercase text-white'>Página no encontrada</p>
        <Link to = "/" className="section-btn" > Volver al inicio </Link>
      </div>
    </PageNotFoundWrapper>
  )
}

export default PageNotFound;

/**
 * Estilo del componente PageNotFoundWrapper
 * 
 * @component
 * @description Este styled-component define los estilos para la página de error 404. Incluye un fondo oscuro, estilos para el texto del error y un botón para volver al inicio.
 * @returns {StyledComponent} El componente estilizado que representa la página de error 404.
 */
const PageNotFoundWrapper = styled.div`
background-color: var(--clr-violet-dark-active);
  .value-404{
    font-size: 60px;
    font-weight: 800;
    color: var(--clr-blue-normal);
  }
  .not-found-text{
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .section-btn{
    display: inline-block;
    margin-top: 18px;
  }
`;
