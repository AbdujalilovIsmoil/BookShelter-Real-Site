const initialState = {
  username: "",
  password: "",
  email: ""
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
        password: "",
        email: ""
      };
    case "EMAIL":
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
};
