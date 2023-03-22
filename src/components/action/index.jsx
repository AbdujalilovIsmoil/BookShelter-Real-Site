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

export const CLEAR_INPUT = () => {
  return {
    type: "CLEAR_INPUT"
  };
};
