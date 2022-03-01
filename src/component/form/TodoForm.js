import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todoAction";

export default function TodoForm() {
  const [name, setName] = useState(null);
  const dispatch = useDispatch();

  const handleSumbit = () => {
    dispatch(addTodo(name));
  };

  return (
    <>
      <p>ADD TODOS</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button type="submit" onClick={() => handleSumbit()}>
        submit
      </button>
    </>
  );
}
