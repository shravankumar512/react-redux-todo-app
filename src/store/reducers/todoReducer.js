const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD-TODO":
      return [...state, action.todo];
    case "REMOVE-TODO":
      console.log(action, state);
      return state.filter((name) => name !== action.todoName);

    default:
      return state;
  }
};

export default todoReducer;
