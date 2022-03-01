import { React } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const items = useSelector((state) => state.todos);

  const listItems = items.map((item) => (
    <TodoItem key={item.toString()} value={item} />
  ));

  return (
    <div className="todo-list">
      {" "}
      <p>TodoList</p>
      <ul>{listItems}</ul>
    </div>
  );
}
