import React from "react";

const index = ({ type, className, children }) => {
  return (
    <>
      <button type={type} className={className}>
        {children}
      </button>
    </>
  );
};

export default index;
