import { useState } from "react";
import styled from "styled-components";
import { createTodos } from "../../service/api";

const TodoForm = styled.form`
  width: 100%;
  text-align: center;
`;

const ToDoInput = styled.input`
  width: 50%;
  padding: 0.8rem;
  font-size: 1rem;
`;

const RegisterBtn = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
`;

export function ToDoForm() {
  const [newTodo, setNewTodo] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewTodo(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodos(newTodo);
    setNewTodo("");
  };

  return (
    <TodoForm onSubmit={onSubmit}>
      <ToDoInput
        type="text"
        placeholder="할 일을 입력하세요."
        onChange={onChange}
        value={newTodo}
      />
      <RegisterBtn>등록</RegisterBtn>
    </TodoForm>
  );
}
