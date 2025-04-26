import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (formData) => {
    if (formData.get("todo").length > 0) {
      setTodos((prevTodos) => {
        const maxId =
          prevTodos.length > 0
            ? Math.max(...prevTodos.map((todo) => todo.id))
            : 0;
        const newTodo = {
          id: maxId + 1,
          text: formData.get("todo"),
          isCompleted: false,
        };
        return [...prevTodos, newTodo];
      });
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => {
        return prevTodo.id !== id;
      })
    );
  };

  const handleFinishedTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return { ...prevTodo, isCompleted: !prevTodo.isCompleted };
        } else {
          return prevTodo;
        }
      })
    );
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <form action={handleAddTodo}>
        <input
          autoComplete="off"
          type="text"
          name="todo"
          id="todo"
          placeholder="e.g. Do the dishes"
        />
        <button>Add Todo</button>
      </form>
      <TodoList
        todos={todos}
        handleRemove={handleRemoveTodo}
        handleFinish={handleFinishedTodo}
      />
    </div>
  );
}
