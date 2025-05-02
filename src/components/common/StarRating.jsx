import styled from 'styled-components';
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

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
