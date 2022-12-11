import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.2rem;
  position: relative;
`;

const Title = styled.h1``;

const Logout = styled.button`
  position: absolute;
  right: 1.2rem;
`;

export function ToDoHeader() {
  const history = useHistory();

  const onLogout = () => {
    localStorage.removeItem("login-token");
    history.push("/");
  };

  return (
    <Header>
      <Title>To Do List</Title>
      <Logout onClick={onLogout}>로그아웃</Logout>
    </Header>
  );
}
