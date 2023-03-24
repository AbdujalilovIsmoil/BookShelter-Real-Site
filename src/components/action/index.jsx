export const USERNAME = (value) => {
  return {
    type: "USERNAME",
    payload: value
  };
};

export const PASSWORD = (value) => {
  return {
    type: "PASSWORD",
    payload: value
  };
};

export const EMAIL = (value) => {
  return {
    type: "EMAIL",
    payload: value
  };
};

export const CLEAR_INPUT = () => {
  return {
    type: "CLEAR_INPUT"
  };
};

export const SEARCH_INPUT = (value) => {
  return {
    type: "SEARCH_INPUT",
    payload: value
  };
};

export const SEARCH_DATA = (data) => {
  return {
    type: "SEARCH_DATA",
    payload: data
  };
};

export const LOADER = (value) => {
  return {
    type: "LOADER",
    payload: value
  };
};

export const OPEN_MODAL = (value) => {
  return {
    type: "OPEN_MODAL",
    payload: value
  };
};

export const CLOSE_MODAL = (value) => {
  return {
    type: "CLOSE_MODAL",
    payload: value
  };
};

export const ALL_BOOKS = (value) => {
  return {
    type: "ALL_BOOKS",
    payload: value
  };
};

export const DELETE_ITEM = (value) => {
  return {
    type: "DELETE_ITEM",
    payload: value
  };
};
