import { React } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/actions/todoAction";

export default function TodoItem({ value }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(value));
  };

  return (
    <>
      {" "}
      <li>
        <div>{value}</div>
        <div className="remove-icon" onClick={() => handleRemove()}>
          X
        </div>
      </li>
    </>
  );
}
