import styled from "styled-components";
import { Register } from "../../components/user";
import { form_image } from "../../utils/images";

const RegisterPage = () => {
  return (
    <RegisterPageWrapper
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${form_image}) center/cover no-repeat`,
      }}
    >
      <Register />
    </RegisterPageWrapper>
  );
};

export default RegisterPage;

const RegisterPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;
