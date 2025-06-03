import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Componente Title
 * 
 * @component
 * @description Este componente muestra un título con dos partes de texto, donde la segunda parte está resaltada. Se utiliza para destacar secciones importantes en la interfaz de usuario.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.titleName - Un objeto que contiene dos propiedades: `firstText` y `secondText`, que representan las dos partes del título.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa el título estilizado. 
 */
const Title = ({ titleName }) => {
  return (
    <TitleWrapper>
      <h3>
        {titleName.firstText} <span>{titleName.secondText}</span>
      </h3>

      <div className='line'></div>
    </TitleWrapper>
  )
}

export default Title;

Title.propTypes = {
  titleName: PropTypes.object
}

/**
 * Estilos del componente Title
 * 
 * @description Este styled-component define los estilos para el título, incluyendo el espaciado, alineación, color y tipografía. También incluye un subrayado decorativo.
 * @returns {StyledComponent} El componente estilizado para el título.
 */
const TitleWrapper = styled.div`
  padding: 12px 0;
  text-align: center;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: 0.1em;
  color: var(--clr-white);
  margin-bottom: 40px;
  font-family: var(--font-family-poppins);
  
  h3{
    text-transform: uppercase;
    position: relative;

    span{
      color: var(--clr-pink-normal);
    }
  }

  .line{
    margin-top: 16px;
    height: 6px;
    width: 160px;
    margin-right: auto;
    margin-left: auto;
    background-color: var(--clr-blue-normal);
    position: relative;

    &::after{
      content: "";
      position: absolute;
      left: -5px;
      border-right: 6px solid var(--clr-blue-normal);
      border-bottom: 3.5px solid transparent;
      border-top: 3.5px solid transparent;
    }

    &::before{
      content: "";
      position: absolute;
      right: -6px;
      border-left: 6px solid var(--clr-blue-normal);
      border-bottom: 3.5px solid transparent;
      border-top: 3.5px solid transparent;
    }
  }
`;

