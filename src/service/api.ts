import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const ACCESS_TOKEN = localStorage.getItem("login-token");

export const onLogin = (id: string, password: string) => {
  return API.post("/auth/signin", {
    headers: { "Content-Type": "application/json" },
    email: id,
    password,
  });
};

export const onSignup = (id: string, password: string) => {
  return API.post("/auth/signup", {
    headers: { "Content-Type": "application/json" },
    email: id,
    password,
  });
};

export const createTodos = (todo: string) => {
  return API.post(
    "/todos",
    { todo },
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const getTodos = () => {
  return API.get("/todos", {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });
};

export const updateTodo = (id: number, todo: string, isCompleted: boolean) => {
  return API.put(
    `/todos/${id}`,
    { todo, isCompleted },
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteTodo = (id: number) => {
  return API.delete(`/todos/${id}`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });
};
