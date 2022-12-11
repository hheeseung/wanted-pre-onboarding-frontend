import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { onLogin } from "../service/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1``;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const IdInput = styled.input`
  margin-bottom: 0.8rem;
  padding: 0.8rem;
  font-size: 1.2rem;
`;

const PwdInput = styled.input`
  margin-bottom: 0.8rem;
  padding: 0.8rem;
  font-size: 1.2rem;
`;

const LoginBtn = styled.button`
  padding: 0.8rem;
  font-size: 1.2rem;
`;

const Join = styled.h4`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onIdChange = (e: React.FormEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const onPwdChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(id, password)
      .then((response) => {
        const ACCESS_TOKEN = response.data.access_token;
        if (ACCESS_TOKEN) {
          localStorage.setItem("login-token", ACCESS_TOKEN);
        }
        history.push("/todo");
      })
      .catch((error) => {
        console.log(error);
        window.alert("아이디 또는 비밀번호가 틀렸거나 회원이 아닙니다.");
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm onSubmit={onSubmit}>
        <IdInput
          type="email"
          placeholder="이메일 아이디"
          value={id}
          onChange={onIdChange}
        />
        <PwdInput
          type="password"
          placeholder="8자리 이상의 비밀번호"
          value={password}
          onChange={onPwdChange}
        />
        <LoginBtn disabled={!(id.includes("@") && password.length >= 8)}>
          로그인
        </LoginBtn>
      </LoginForm>
      <Join>
        <Link to="/signup">회원이 아니라면 가입하러 가기</Link>
      </Join>
    </Container>
  );
}
