import styled from "styled-components";
import { ToDoForm } from "../components/ToDo/ToDoForm";
import { ToDoHeader } from "../components/ToDo/ToDoHeader";
import { ToDoList } from "../components/ToDo/ToDoList";

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export interface IToDos {
  id: number;
  isCompleted: boolean;
  todo: string;
  userId: number;
}

export function Todo() {
  return (
    <Container>
      <ToDoHeader />
      <Main>
        <ToDoForm />
        <ToDoList />
      </Main>
    </Container>
  );
}
