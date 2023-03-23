const initialState = {
  username: "",
  password: "",
  email: "",
  search: "panda",
  data: [],
  loader: true,
  modal: false,
  books: []
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
    case "SEARCH_INPUT":
      return {
        ...state,
        search: action.payload
      };
    case "SEARCH_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "LOADER":
      return {
        ...state,
        loader: action.payload
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modal: action.payload
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: action.payload
      };
    case "ALL_BOOKS":
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    default:
      return state;
  }
};
