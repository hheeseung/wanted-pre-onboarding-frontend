import { useState, useEffect } from "react";
import styled from "styled-components";
import { getTodos } from "../../service/api";
import { ToDoListItem } from "./ToDoListItem";

interface IToDos {
  id: number;
  isCompleted: boolean;
  todo: string;
  userId: number;
}

const ToDo = styled.ul`
  width: 80%;
  list-style: none;
  padding: 0;
`;

export function ToDoList() {
  const [todos, setTodos] = useState<IToDos[]>([]);

  useEffect(() => {
    getTodos() //
      .then((response) => {
        setTodos(response.data);
      });
  }, [todos]);

  return (
    <ToDo>
      {todos &&
        todos.map((todo) => (
          <ToDoListItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
          />
        ))}
    </ToDo>
  );
}
