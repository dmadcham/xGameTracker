import styled from 'styled-components';
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

/**
 * Componente de Calificación por Estrellas
 * 
 * @component
 * @description Este componente muestra una calificación por estrellas basada en un valor numérico. Utiliza iconos de estrellas para representar la calificación.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {number} props.rating - La calificación numérica que se mostrará, debe estar entre 0 y 5.
 * 
 * @return {JSX.Element} Un elemento JSX que representa la calificación por estrellas. 
 */
const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5}, (_, idx) => {
        const val = idx + 0.5;
        return (
            <li key={ idx }>
                {
                    rating >= idx + 1 ? (<FaStar />): rating >= val ? (<FaStarHalfAlt />) : (<FaRegStar />)
                }
            </li>
        )
    })

    return (
        <StarRatingWrapper className='rating d-flex align-items-start text-blue'>
            { stars }
        </StarRatingWrapper>
    )
}

export default StarRating;

StarRating.propTypes = {
    rating: PropTypes.number
}


/**
 * Estilos del componente StarRating
 * 
 * @description Este styled-component define los estilos para la calificación por estrellas, incluyendo la posición y el tamaño de las estrellas.
 * @returns {StyledComponent} El componente estilizado para la calificación por estrellas.
 */
const StarRatingWrapper = styled.ul`
    position: absolute;
    right: 18px;
    bottom: 10px;
    z-index: 1;

    li{
        padding: 0 2px;
        font-size: 14px;
    }
`;
