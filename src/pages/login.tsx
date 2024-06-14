import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res);
      Navigate("/");
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <>
      <Navbar />
      <Container>
        <AuthWrapper>
          <TitleWrapper>
            <Title>Welcome Back!</Title>
            <SubTitle>로그인 하셔서 더 많은 컨텐츠를 확인해 보세요!</SubTitle>
          </TitleWrapper>
          <FormWrapper
            onClick={() => {
              login();
            }}
          >
            <GoogleLogo src="../src/assets/images/Google.svg" />
            <GoogleTitle>Sign In With Google</GoogleTitle>
          </FormWrapper>
        </AuthWrapper>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f7f8f9;
`;

const FormWrapper = styled.button`
  width: 100%;
  cursor: pointer;
  height: 45px;
  border: 1px solid #0c0c0c;
  border-radius: 14px;
  background-color: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const GoogleTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #0c0c0c;
`;

const GoogleLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 420px;
  height: auto;
  gap: 40px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 18px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #0c0c0c;
  font-weight: 600;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #9ea4aa;
  font-weight: 500;
`;
