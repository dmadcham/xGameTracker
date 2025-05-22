import styled from "styled-components";
import { Dashboard } from "../../components/user";
import { dashboard_image } from "../../utils/images";

const DashboardPage = () => {
  return (
    <DashboardPageWrapper  style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dashboard_image}) center/cover no-repeat`,
              }} >
        <Dashboard />
    </DashboardPageWrapper>
  )
}

export default DashboardPage

const DashboardPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;