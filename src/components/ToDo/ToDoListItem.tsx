import { useState } from "react";
import styled from "styled-components";
import { deleteTodo, updateTodo } from "../../service/api";

interface IToDos {
  id: number;
  isCompleted: boolean;
  todo: string;
  userId?: number;
}

const TodoList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Checkbox = styled.span`
  cursor: pointer;
`;

const TodoTitle = styled.li``;

const Title = styled.input<{ isCompleted: boolean; isEdit: boolean }>`
  font-size: 1rem;
  border: none;
  outline: none;
  width: 250px;
  text-decoration: ${(props) =>
    props.isCompleted && props.isEdit ? "line-through" : "none"};
  color: ${(props) => (props.isEdit ? "#000" : "#6495ed")};
  :disabled {
    background-color: inherit;
    color: #000;
  }
`;

const ButtonContainer = styled.div``;

const EditBtn = styled.button``;

const SubmitBtn = styled.button``;

const DeleteBtn = styled.button``;

const CancelBtn = styled.button``;

export function ToDoListItem({ id, todo, isCompleted }: IToDos) {
  const [isEdit, setIsEdit] = useState(true);
  const [editTodo, setEditTodo] = useState(todo);

  const onCompletedChange = () => {
    updateTodo(id, todo, !isCompleted);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEditTodo(e.currentTarget.value);
  };

  const onUpdate = () => {
    setIsEdit(false);
  };

  const onSubmit = () => {
    updateTodo(id, editTodo, isCompleted);
    setIsEdit(true);
  };

  const onCancel = () => {
    setEditTodo(todo);
    setIsEdit(true);
  };

  return (
    <TodoList>
      <Checkbox onClick={onCompletedChange}>
        {isCompleted ? "✅" : "🟩"}
      </Checkbox>
      <TodoTitle>
        <Title
          disabled={isEdit}
          value={editTodo}
          onChange={onChange}
          isCompleted={isCompleted}
          isEdit={isEdit}
        />
      </TodoTitle>
      <ButtonContainer>
        {isEdit ? (
          <>
            <EditBtn onClick={onUpdate}>수정</EditBtn>
            <DeleteBtn onClick={() => deleteTodo(id)}>삭제</DeleteBtn>
          </>
        ) : (
          <>
            <SubmitBtn onClick={onSubmit}>완료</SubmitBtn>
            <CancelBtn onClick={onCancel}>취소</CancelBtn>
          </>
        )}
      </ButtonContainer>
    </TodoList>
  );
}
