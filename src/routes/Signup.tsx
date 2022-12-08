import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { API } from "../api";

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
    API.post("/auth/signup", {
      email: id,
      password,
    })
      .then((response) => {
        window.alert("회원가입 성공!");
      })
      .catch((error) => {
        window.alert(`${error}. 다시 시도해주세요.`);
      });
  };

  if (localStorage.getItem("login-token")) {
    history.push("/todo");
  } else {
    history.push("/");
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <label>아이디 </label>
        <input
          type="email"
          placeholder="이메일 아이디를 입력하세요."
          onChange={onIdChange}
          value={id}
        />
        &nbsp;
        <label>비밀번호 </label>
        <input
          type="password"
          placeholder="8자리 이상 입력하세요."
          onChange={onPwdChange}
          value={password}
        />
        <button disabled={!(id.includes("@") && password.length >= 8)}>
          가입하기
        </button>
      </form>
      <br />
      <Link to="/login">계정이 있을 시 로그인 하러가기</Link>
    </>
  );
}
