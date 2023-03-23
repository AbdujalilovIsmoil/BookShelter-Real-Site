import React from "react";
import "./Loader.scss";

const index = () => {
  return (
    <>
      <div className="wrapper d-flex justify-content-center">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default index;
