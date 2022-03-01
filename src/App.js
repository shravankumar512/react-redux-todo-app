import { React } from "react";
import "./styles.css";
import TodoList from "./component/todos/TodoList";
import TodoForm from "./component/form/TodoForm";

export default function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}
