import React from "react";

const index = ({ type, className, children, onClick, id }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick} id={id}>
        {children}
      </button>
    </>
  );
};

export default index;
