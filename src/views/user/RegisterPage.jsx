import styled from "styled-components";
import { Register } from "../../components/user";
import { form_image } from "../../utils/images";

/**
 * Componente RegisterPage
 * 
 * @component
 * @description Este componente representa la página de registro del usuario. Muestra un formulario de registro estilizado con una imagen de fondo. Utiliza el componente `Register` para renderizar el formulario y aplica estilos personalizados al contenedor principal.
 * @returns {JSX.Element} Un elemento JSX que representa la página de registro del usuario estilizada.
 */
const RegisterPage = () => {
  return (
    <RegisterPageWrapper
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${form_image}) center/cover no-repeat`,
      }}
    >
      <Register />
    </RegisterPageWrapper>
  );
};

export default RegisterPage;

/**
 * Estilos del componente RegisterPageWrapper
 * 
 * @description Este styled-component define los estilos para la página de registro del usuario. Incluye un fondo oscuro y una imagen de fondo, y asegura que el contenido esté centrado y tenga un padding adecuado.
 * @returns {StyledComponent} El componente estilizado que representa la página de registro del usuario.
 */
const RegisterPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;
