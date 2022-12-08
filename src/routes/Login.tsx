import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { API } from "../api";

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
    API.post("/auth/signin", {
      email: id,
      password,
    })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("login-token", response.data.access_token);
        }
      })
      .then((response) => history.push("/todo"))
      .catch((error) => {
        console.log(error);
        window.alert("아이디가 틀렸거나 회원이 아닙니다.");
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>아이디 </label>
        <input
          type="email"
          placeholder="이메일 아이디를 입력하세요."
          value={id}
          onChange={onIdChange}
        />
        &nbsp; <label>비밀번호 </label>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={onPwdChange}
        />
        <button disabled={!(id.includes("@") && password.length >= 8)}>
          로그인
        </button>
      </form>
      <br />
      <Link to="/">회원가입</Link>
    </>
  );
}
