const initialState = {
  username: "",
  password: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERNAME":
      return {
        ...state,
        username: action.payload
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.payload
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        username: "",
        password: ""
      };
    default:
      return state;
  }
};
