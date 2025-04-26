import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleRemove, handleFinish }) {
  const todosList = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo.text}
      onFinish={() => handleFinish(todo.id)}
      handleRemove={() => handleRemove(todo.id)}
      isCompleted={todo.isCompleted}
    />
  ));

  return <ul className="todo-list">{todosList}</ul>;
}
