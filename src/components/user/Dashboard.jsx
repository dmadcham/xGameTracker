import styled from "styled-components";
import { default_profile_image } from "../../utils/images";
import Favorites from "./Favorites";
import { useEffect, useRef, useState } from "react";

const Dashboard = () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  return (
    <DashboardWrapper>
      <div className="profile">
        <div className="profile-top">
            <img
              src={default_profile_image}
              alt={username + "_pfp"}
              className="bg-blue"
            />
        </div>
        <h2 className="profile-title text-white">{username}</h2>
        <div className="profile-bottom">
          <h4 className="text-white text-uppercase mt-3 fs-25">
            Juegos favoritos
          </h4>
          <Favorites />
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;

const DashboardWrapper = styled.div`
  background-color: var(--clr-violet-light-transparent);
  width: 100%;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
  margin: 0 20px;
  min-height: 360px;
  margin-bottom: 80px;
  padding: 16px 32px 24px 32px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--clr-white);

  .profile-title {
    font-size: 50px;
  }

  .profile-top {
    height: 150px;
    width: 150px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -75px;
    border: 2px solid var(--clr-white);
    transition: var(--transition-default);

    &:hover {
      transform: scale(1.1);
    }

    .username {
      margin: 0 0 24px 0;
      font-size: 22px;
      font-weight: 600;
    }
  }
`;
