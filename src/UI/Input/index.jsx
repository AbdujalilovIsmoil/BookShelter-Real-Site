import React from "react";

const index = ({
  type,
  className,
  placeholder,
  value,
  onChange,
  onKeyDown
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default index;
