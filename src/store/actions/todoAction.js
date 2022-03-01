export const addTodo = (name) => {
  return {
    type: "ADD-TODO",
    todo: name
  };
};

export const removeTodo = (name) => {
  return {
    type: "REMOVE-TODO",
    todoName: name
  };
};
