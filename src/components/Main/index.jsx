import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../../UI/index";
import "./Main.scss";

const index = () => {
  const { data } = useSelector((state) => state);

  return (
    <>
      <div className="wrapper bg-light py-2">
        <div className="container">
          <section className="result d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block justify-content-between align-items-center">
            <h6 className="result__title fw-bold text-dark mt-2 text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center text-center">
              Showing {data?.items?.length} Result(s)
            </h6>
            <Button className="result-btn shadow-sm mx-xxl-0 mx-xl-0 mx-lg-0 mx-md-0 mx-sm-auto mx-auto">
              <i className="far fa-calendar text-light"></i>
              <p className="result-btn__text text-light">Order by newest</p>
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default index;
