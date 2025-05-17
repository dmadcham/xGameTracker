import styled from "styled-components";
import { FaClock, FaDesktop, FaCog, FaTags, FaGlobe } from "react-icons/fa";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { StoreItem } from "../store";

const GameDetails = ({ gameData }) => {
  let platforms = gameData?.platforms?.map(
    (platform) => platform.platform.name
  );
  let developers = gameData?.developers?.map((developer) => developer.name);
  let genres = gameData?.genres?.map((genre) => genre.name);
  let publishers = gameData?.publishers?.map((publisher) => publisher.name);

  return (
    <GameDetailsWrapper>
      <div className="details-title">
        <h3 className="details-title-text text-white fw-6 text-uppercase">
          {gameData?.name}
        </h3>
      </div>
      <div className="details-grid d-grid">
        <div className="details-left img-fit-cover">
          <img src={`${gameData?.background_image}`} alt={gameData?.name} />
        </div>

        <div className="details-right">
          <h4 className="details-right-title fw-7 text-blue b-3 text-uppercase">
            A cerca <span className="text-white">de este juego</span>
          </h4>
          {/* Se enseña solo una parte de la descripción para evitar exceso de texto */}
          <div
            className="para-text"
            dangerouslySetInnerHTML={{
              __html:
                gameData?.description?.split(".").splice(0, 3).join(".") + ".",
            }}
          ></div>
          <ul className="details-list-group">
            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <FaClock size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  Fecha de lanzamiento:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {" "}
                {gameData?.released}
              </span>
            </li>
            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <FaDesktop size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  Plataformas:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {" "}
                {platforms?.join(", ")}
              </span>
            </li>
            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <FaCog size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  Desarrolladores:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {" "}
                {developers?.join(", ")}
              </span>
            </li>
            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <FaTags size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">Géneros:</span>
              </div>
              <span className="item-right item-value fw-4">
                {" "}
                {genres?.join(", ")}
              </span>
            </li>
            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <FaGlobe size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  Editores:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {" "}
                {publishers?.join(", ")}
              </span>
            </li>
          </ul>
        </div>

      </div>
      
        {/* Tabs */}
        <Tabs>
          <TabList>
            <Tab>Descripción</Tab>
            <Tab>Plataformas</Tab>
            <Tab>Tiendas</Tab>
          </TabList>

          <TabPanel>
            <h3 className="text-white mb-3">Descripción</h3>
            <div
              className="para-text"
              dangerouslySetInnerHTML={{ __html: gameData?.description }}
            ></div>
          </TabPanel>
          <TabPanel>
            <h3 className="text-white mb-3">Plataformas</h3>
            <div className="platforms-list card-list">
              {gameData?.platforms?.map((item) => {
                return (
                  <div
                    className="platform-item text-white"
                    key={item?.platform?.id}
                  >
                    <p className="platform-name mb-2">{item?.platform?.name}</p>
                    <div className="platform-img-wrapper img-fit-cover">
                      <img
                        src={item?.platform?.image_background}
                        alt={item?.platform?.name}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <h3 className="text-white mb-3">Tiendas disponibles</h3>
            <div className="card-list">
              {gameData?.stores?.map((item) => (
                <StoreItem key={item?.store?.id} storeItem={item?.store} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
    </GameDetailsWrapper>
  );
};

export default GameDetails;

GameDetails.propTypes = {
  gameData: PropTypes.array,
};

const GameDetailsWrapper = styled.div`
  background: rgba(0, 0, 0, 0.16);
  padding: 32px 14px;
  margin-top: 32px;

  .details-title {
    margin-bottom: 36px;

    &-text {
      font-size: 28px;
      letter-spacing: 0.04em;
      font-family: var(--font-family-poppins);
    }
  }

  .details-left {
    min-height: 320px;
  }

  .details-right {
    margin-top: 24px;

    &-title {
      font-size: 24px;
      letter-spacing: 2px;
    }
    .para-text {
      font-weight: 200;
      opacity: 0.9;
    }

    .details-list-group {
      padding: 30px 0;

      .list-group-item {
        margin: 8px 0;
      }

      .item-icon {
        overflow: hidden;
        width: 32px;
      }
      .item-title {
        letter-spacing: 0.04em;
        margin-right: 12px;
      }
    }
  }

  .platforms-list {
    gap: 16px;

    .platform-img-wrapper {
      height: 180px;
    }
  }

  @media screen and (min-width: 1080px) {
    padding: 60px 42px;

    .details-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      align-items: stretch;
    }

    .details-right {
      margin-top: 0;
    }

    .details-title {
      &-text {
        font-size: 42px;
      }
    }
  }

  .react-tabs {
    margin-top: 48px;

    &__tab {
      border-radius: 0;
      color: var(--clr-white);
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.08em;
      padding: 8px 16px;
      margin-top: 6px;
      text-transform: uppercase;

      &--selected {
        color: var(--clr-dark);
        font-weight: 700;
      }

      &:after {
        display: none;
      }
    }

    &__tab-panel {
      padding: 16px 0;
    }

    &__tab-list {
    }
  }

  @media screen and (min-width: 992px) {
    .react-tabs {
      &__tab {
        font-size: 18px;
        padding: 10px 32px;
        display: inline-block;
        &--selected {
          color: var(--clr-dark);
        }
      }
    }

    .platforms-list {
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
  }
`;
