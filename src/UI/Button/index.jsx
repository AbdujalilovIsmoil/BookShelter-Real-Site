import React from "react";

const index = ({ type, className, children, onClick }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default index;
