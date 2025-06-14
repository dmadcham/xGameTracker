import styled from 'styled-components';
import { banner_image } from '../../utils/images';

/**
 * Componente Banner
 * 
 * @component
 * @description Este componente muestra un banner con una imagen de fondo, un título, un texto descriptivo y un botón.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa el banner de la aplicación.
 */
const Banner = () => {
  return (
    <BannerWrapper className='d-flex align-items-center justify-content-start' style={{ 
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%,
      rgba(15, 10, 60, 0.41) 38.46%), url(${banner_image}) center/cover no-repeat`
      }}>
        <div className='banner-content w-100 container text-white'>
          <div className='banner-badge'>xGameTracker</div>
          <h1 className='banner-title text-uppercase'>El Tracker de videojuegos que todo gamer necesita</h1>
          <p className='lead-text'>xGameTracker es una plataforma hecha por y para gamers! Aquí puedes ver la información de miles de juegos, y añadir los que quieras a favoritos!
          </p>

        </div>
    </BannerWrapper>
  )
}

export default Banner;


/**
 * Estilos del componente Banner
 * 
 * @description Este styled-component define los estilos para el Banner, incluyendo el fondo, el título, el texto descriptivo y el botón.
 * @returns {StyledComponent} El componente estilizado para el Banner. 
 */
const BannerWrapper = styled.div`
    min-height: 768px;

    .banner-badge{
      background-color: var(--clr-blue-normal);
      padding: 4px 16px;
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 0.1em;
      display: inline-block;
      margin-bottom: 25px;
    }

    .banner-title{
      font-family: var(--font-family-right);
      font-size: 48px;
      font-weight: 400;
      letter-spacing: 0.09em;
      line-height: 1.2;
      max-width: 600px;
      margin-bottom: 40px;
    }

    .lead-text{
      max-width: 600px;
    }
    .banner-btn{
      min-width: 140px;
      height: 45px;
      padding: 13px 16px;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      border: 2px solid var(--clr-blue-normal);
      margin-top: 33px;

      .btn-icon{
        margin-right: 16px;
      }

      &:hover{
        background-color: var(--clr-blue-normal);
        .btn-text{
          color: var(--clr-white);
        }
      }
    }

    @media screen and (min-width: 992px){
      .banner-badge{
        font-size: 26px;
      }

      .banner-title{
        font-size: 56px;
      }
    }
`;
