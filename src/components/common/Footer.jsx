import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearFavorites } from "../../redux/store/favSlice";
import { useNavigate } from "react-router-dom";

/**
 * Componente Footer
 * 
 * @description Este componente muestra el pie de página de la aplicación, incluyendo enlaces rápidos, información de contacto y un botón para iniciar sesión o salir.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa el pie de página de la aplicación.
 */
const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(clearFavorites());
    navigate("/login");
  };

  return (
    <FooterWrapper>
      <div className="footer-top">
        <div className="footer-content text-white d-grid container">
          <div className="footer-item">
            <a href="#" className="navbar-brand text-white no-wrap d-block">
              x<span>Game</span>Tracker
            </a>
            <p className="para-text">
              xGameTracker es una plataforma hecha por y para gamers! Busca
              información de miles de juegos, y añádelos a favoritos!
            </p>
          </div>
          <div className="footer-item">
            <h5 className="footer-item-title text-uppercase">Links Rápidos</h5>
            <ul className="footer-item-links">
              <li>
                <a href="/" className="text-white">
                  Gaming
                </a>
              </li>
              <li>
                <a href="/games" className="text-white">
                  Productos
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://discord.com/invite/gT9JuNvTe8"
                  className="text-white"
                >
                  Comunidad
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h5 className="footer-item-title text-uppercase">Soporte</h5>
            <ul className="footer-item-links">
              <li>
                <a
                  href="https://discord.com/invite/gT9JuNvTe8"
                  className="text-white"
                >
                  Ayuda y soporte
                </a>
              </li>
              <li>
                <a href="https://www.twitch.tv/" className="text-white">
                  Acciones en vivo
                </a>
              </li>
              <li>
                <a href="https://vandal.elespanol.com/" className="text-white">
                  Noticias
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h5 className="footer-item-title text-uppercase">
              {isAuthenticated ? "Salir" : "Unirse"}
            </h5>
            <p className="para-text">
              {isAuthenticated ? "Ya estás dentro. ¡Explora todo lo que tenemos para ti!" : "Inicia sesión para acceder a todas las funciones de la plataforma." }
            </p>

            {isAuthenticated ? (
              <button
                type="button"
                className="footer-button mt-4"
                onClick={handleLogout}
              >
                Salir
              </button>
            ) : (
              <button
                type="button"
                className="footer-button mt-4"
                onClick={() => navigate("/login")}
              >
                Iniciar sesión
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex flex-column text-center">
          <p className="footer-bottom-text text-blue">
            {" "}
            &copy; 2025 xGameTracker - Diseñado por Diego Madroñero Chamorro.{" "}
          </p>
          <ul className="footer-bottom-links d-flex justif-content-center">
            <li>
              <a href="/" className="text-white">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/invite/gT9JuNvTe8"
                className="text-white"
              >
                Contacto
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Iniciar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

/**
 * Estilos del componente Footer
 * 
 * @component
 * @description Este styled-component define los estilos para el Footer, incluyendo el diseño de la parte superior e inferior, los enlaces y botones.
 * @returns {StyledComponent} El componente estilizado para el Footer.
 */
const FooterWrapper = styled.footer`
  .footer-top {
    background-color: var(--clr-violet-darker);
    padding: 78px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer-content {
    row-gap: 24px;
  }

  .navbar-brand {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 18px;

    span {
      color: var(--clr-blue-normal);
    }
  }

  .footer-item {
    text-align: center;

    .para-text {
      max-width: 380px;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .footer-item-links {
    li {
      margin: 6px 0;

      a {
        color: rgba(255, 255, 255, 0.9);

        &:hover {
          color: var(--clr-white);
          text-decoration: underline;
        }
      }
    }
  }

  .footer-item-title {
    margin-bottom: 12px;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 700;
  }

  .footer-bottom {
    background: #04020e;
    padding: 20px 0;
    &-text {
      font-weight: 500;
    }

    li {
      margin-left: 18px;
    }

    &-links {
      margin-top: 12px;
    }
  }

  @media screen and (min-width: 768px) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 32px;

      .footer-item {
        text-align: left;

        .para-text {
          margin-left: 0;
        }
      }

      .input-group {
        margin-left: 0;
      }
    }

    .footer-bottom {
      & > .container {
        flex-direction: var(--clr-white);
        justify-content: space-between;
      }

      li {
        margin-left: 32px;
      }
      &-links {
        margin-top: 0;
      }
    }
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    text-align: center;

    .footer-bottom-links {
      justify-content: center;
    }
  }

  @media screen and (min-width: 1200px) {
    .footer-content {
      grid-template-columns: 3fr 2fr 2fr 3fr;
    }
  }

  .footer-button {
    height: 34px;
    text-align: center;
    border: 1px solid var(--clr-blue-normal);
    padding: 0px 16px;
    min-width: 108px;
    color: var(--clr-white);
    font-weight: 600;
    letter-spacing: 0.03em;
    display: flex;
    align-items: center;
    transition: var(--transition-default);

    &:hover {
      background-color: var(--clr-blue-normal);
    }
  }
`;
