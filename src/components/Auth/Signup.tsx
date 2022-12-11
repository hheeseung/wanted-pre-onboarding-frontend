import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { onSignup } from "../../service/api";

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

export function Signup() {
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
    onSignup(id, password)
      .then((response) => {
        if (response.data.access_token) {
          window.alert("회원가입 성공!");
          history.push("/");
        } else {
          window.alert("회원가입 실패");
        }
      })
      .catch(() => {
        window.alert(
          `가입 에러: 이미 있는 계정일 수도 있습니다. 다른 아이디로 다시 시도해주세요.`
        );
      });
  };

  return (
    <Container>
      <Title>회원가입</Title>
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
          가입하기
        </LoginBtn>
      </LoginForm>
      <Join>
        <Link to="/">로그인 하러 가기</Link>
      </Join>
    </Container>
  );
}
