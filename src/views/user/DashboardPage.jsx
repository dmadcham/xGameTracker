import styled from "styled-components";
import { Dashboard } from "../../components/user";
import { dashboard_image } from "../../utils/images";

/**
 * Componente DashboardPage
 * 
 * @component
 * @description Este componente representa la página del dashboard del usuario. Muestra el dashboard estilizado con una imagen de fondo y permite al usuario ver sus juegos favoritos.
 * @returns {JSX.Element} Un elemento JSX que representa la página del dashboard del usuario estilizada.
 */
const DashboardPage = () => {
  return (
    <DashboardPageWrapper  style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dashboard_image}) center/cover no-repeat`,
              }} >
        <Dashboard />
    </DashboardPageWrapper>
  )
}

export default DashboardPage

/**
 * Estilos del componente DashboardPageWrapper
 * @description Este styled-component define los estilos para la página del dashboard del usuario. Incluye un fondo oscuro y una imagen de fondo, y asegura que el contenido esté centrado y tenga un padding adecuado.
 * @returns {StyledComponent} El componente estilizado que representa la página del dashboard del usuario.
 */
const DashboardPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;