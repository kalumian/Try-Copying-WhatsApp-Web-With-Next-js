import Head from "next/head";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
const Login = () => {
  const signIn = () => {
    try {
      auth.signInWithPopup(provider);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Container>
        <Head>
          <title>تسجيل الدخول</title>
        </Head>

        <LoginContainer>
          <Logo
            width="200px"
            src="data:image/png;base64,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"
          />
          <Button variant="outlined">
            <SpanButton onClick={signIn}>تسجيل دخول بحسابك في جوجل</SpanButton>
          </Button>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;

// Styled Component !

const Container = styled.div`
  place-content: center;
  display: grid;
  height: 100vh;
  background: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 100px 50px;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0.7);
`;

const SpanButton = styled.span`
  font-weight: 600;
  font-size: 16px;
  font-family: "Cairo", sans-serif;
`;

const Logo = styled.img`
  margin-bottom: 50px;
`;
