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
