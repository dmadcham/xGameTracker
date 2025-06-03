import styled from "styled-components";
import { Login } from "../../components/user";
import { form_image } from "../../utils/images";

/**
 * Componente LoginPage
 * 
 * @component
 * @description Este componente representa la página de inicio de sesión del usuario. Muestra un formulario de inicio de sesión estilizado con una imagen de fondo. Utiliza el componente `Login` para renderizar el formulario y aplica estilos personalizados al contenedor principal.
 * @returns {JSX.Element} Un elemento JSX que representa la página de inicio de sesión del usuario estilizada.
 */
const LoginPage = () => {
  return (
    <LoginPageWrapper
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${form_image}) center/cover no-repeat`,
      }}
    >
      <Login />
    </LoginPageWrapper>
  );
};

export default LoginPage;

/**
 * Estilos del componente LoginPageWrapper
 * @description Este styled-component define los estilos para la página de inicio de sesión del usuario. Incluye un fondo oscuro y una imagen de fondo, y asegura que el contenido esté centrado y tenga un padding adecuado.
 * @returns {StyledComponent} El componente estilizado que representa la página de inicio de sesión del usuario.
 */
const LoginPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;
