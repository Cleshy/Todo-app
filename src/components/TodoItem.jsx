import { FaRegTrashAlt } from "react-icons/fa";

export default function TodoItem({
  todo,
  handleRemove,
  onFinish,
  isCompleted,
}) {
  return (
    <li onClick={onFinish} className={`${isCompleted ? "todo-done" : ""}`}>
      {todo}
      <FaRegTrashAlt
        onClick={(e) => {
          e.stopPropagation();
          handleRemove();
        }}
        className="todo-icon"
      />
    </li>
  );
}
