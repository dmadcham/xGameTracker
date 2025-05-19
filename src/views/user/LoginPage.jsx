import styled from "styled-components";
import { Login } from "../../components/user";
import { form_image } from "../../utils/images";

const LoginPage = () => {
  return (
    <LoginPageWrapper
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${form_image}) center/cover no-repeat`,
      }}
    >
      <Login />
    </LoginPageWrapper>
  );
};

export default LoginPage;

const LoginPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;
