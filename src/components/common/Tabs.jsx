import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HiMenu } from "react-icons/hi";
import { GenreItem } from "../genre";

/**
 * Componente Tabs
 * 
 * @component
 * @description Este componente muestra una lista de géneros de juegos en forma de pestañas. Permite al usuario seleccionar un género y ver los juegos asociados a ese género.
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.data - Un array de objetos que representan los géneros de juegos. Cada objeto debe tener un `id`, `name` y un array de `games`.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa las pestañas de géneros de juegos.
 */
const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]); // Por defecto se utiliza el primer género
  const [tabButtonStatus, setTabButtonStatus] = useState(false);

  const tabClickHandler = (id) => {
    data.map((item) => {
      if (item.id === id) {
        setActiveTab(item);
      }
    });
  };

  const tabButtonsHandler = () =>
    setTabButtonStatus((prevStatus) => !prevStatus);

  return (
    <TabsWrapper className="bg-white">
      <div className="container">
        <div className="tabs-content">
          <ul className={`tabs-buttons ${tabButtonStatus ? "show" : ""}`}>
            <button
              type="button"
              className="tabs-buttons-close bg-white d-flex align-items-center justify-content-center"
              onClick={tabButtonsHandler}
            >
              <HiMenu size={22} />
            </button>
            {data.map((item) => {
              return (
                <li
                  key={item?.id}
                  className={`tabs-button ${
                    item?.id === activeTab.id ? "tabs-active" : ""
                  }`}
                >
                  <button
                    className="text-white"
                    type="button"
                    onClick={() => tabClickHandler(item?.id)}
                  >
                    {item?.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="tabs-body">
            <div className="card-list">
              {activeTab?.games?.map((item) => (
                <GenreItem key={item.id} gameItem={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TabsWrapper>
  );
};

export default Tabs;

Tabs.propTypes = {
  data: PropTypes.array,
};

/**
 * Estilos del componente Tabs
 * 
 * @description Este styled-component define los estilos para el componente de pestañas, incluyendo la disposición de los botones y el cuerpo de las pestañas.
 * @returns {StyledComponent} El componente estilizado para las pestañas.
 */
const TabsWrapper = styled.div`
  position: relative;
  min-height: 1000px;
  background-color: var(--clr-violet-dark-active);

  .tabs-buttons {
    position: absolute;
    left: 0;
    top: 0;
    width: 286px;
    z-index: 99;
    padding-top: 60px;
    padding-bottom: 60px;
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
    transition: var(--transition-default);

    .tabs-buttons-close {
      position: absolute;
      right: -32px;
      top: 0;
      width: 32px;
      height: 32px;
      display: none;

      &:hover {
        background-color: var(--clr-pink-normal);
        color: var(--clr-white);
      }
    }

    @media screen and (max-width: 1480px) {
      width: 240px;
    }

    @media screen and (max-width: 1380px) {
      width: 200px;
    }

    @media screen and (max-width: 1280px) {
      transform: translateX(-88%);
      width: 286px;

      .tabs-buttons-close {
        display: block;
      }

      &.show {
        transform: translateX(0);
      }
    }
  }

  .tabs-button {
    button {
      padding: 12px 30px;
      font-family: "Barlow";
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.1em;
      /* border-bottom: 1px solid rgba(255, 255, 255, 0.03); */
      width: 100%;
      text-align: start;
    }

    &:hover:not(.tabs-active) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .tabs-active {
    background-color: var(--clr-pink-normal);
    button {
      color: var(--clr-white);
    }
  }

  .tabs-body {
    max-width: 1050px;
    margin-left: auto;
  }
`;
