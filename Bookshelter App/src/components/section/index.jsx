import React from "react";
import "./section.scss";
import Card from "../../assets/images/jpg/cards/card.jpg";

const index = () => {
  return (
    <>
      <section className="cards mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 pb-5">
              <div className="cards-box">
                <div className="cards-box-bg">
                  <img
                    src={Card}
                    alt="card"
                    title="card"
                    className="cards-box-bg__img"
                  />
                </div>
                <div className="cards-box-content mt-4">
                  <h5 className="cards-box-content__title text-dark">Python</h5>
                  <p className="cards-box-content__author mt-3 mb-4">
                    David M. Beazley
                  </p>
                  <p className="cards-box-content__year mt-3">2009</p>
                </div>
                <div className="cards-box-content-buttons">
                  <div className="wrapper-flex d-flex justify-content-between">
                    <button
                      type="button"
                      className="cards-box-content-buttons__warning btn btn-warning text-dark shadow-sm"
                    >
                      Bookmark
                    </button>
                    <button
                      type="button"
                      className="cards-box-content-buttons__info btn shadow-sm fw-bold text-primary"
                    >
                      More Info
                    </button>
                  </div>
                  <button
                    type="button"
                    className="shadow-sm fw-bold cards-box-content-buttons__read text-light border border-secondary rounded-1 mt-2"
                  >
                    Read
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 pb-5">
              <div className="cards-box">
                <div className="cards-box-bg">
                  <img
                    src={Card}
                    alt="card"
                    title="card"
                    className="cards-box-bg__img"
                  />
                </div>
                <div className="cards-box-content mt-4">
                  <h5 className="cards-box-content__title text-dark">Python</h5>
                  <p className="cards-box-content__author mt-3 mb-4">
                    David M. Beazley
                  </p>
                  <p className="cards-box-content__year mt-3">2009</p>
                </div>
                <div className="cards-box-content-buttons">
                  <div className="wrapper-flex d-flex justify-content-between">
                    <button
                      type="button"
                      className="cards-box-content-buttons__warning btn btn-warning text-dark shadow-sm"
                    >
                      Bookmark
                    </button>
                    <button
                      type="button"
                      className="cards-box-content-buttons__info btn shadow-sm fw-bold text-primary"
                    >
                      More Info
                    </button>
                  </div>
                  <button
                    type="button"
                    className="shadow-sm fw-bold cards-box-content-buttons__read text-light border border-secondary rounded-1 mt-2"
                  >
                    Read
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 pb-5">
              <div className="cards-box">
                <div className="cards-box-bg">
                  <img
                    src={Card}
                    alt="card"
                    title="card"
                    className="cards-box-bg__img"
                  />
                </div>
                <div className="cards-box-content mt-4">
                  <h5 className="cards-box-content__title text-dark">Python</h5>
                  <p className="cards-box-content__author mt-3 mb-4">
                    David M. Beazley
                  </p>
                  <p className="cards-box-content__year mt-3">2009</p>
                </div>
                <div className="cards-box-content-buttons">
                  <div className="wrapper-flex d-flex justify-content-between">
                    <button
                      type="button"
                      className="cards-box-content-buttons__warning btn btn-warning text-dark shadow-sm"
                    >
                      Bookmark
                    </button>
                    <button
                      type="button"
                      className="cards-box-content-buttons__info btn shadow-sm fw-bold text-primary"
                    >
                      More Info
                    </button>
                  </div>
                  <button
                    type="button"
                    className="shadow-sm fw-bold cards-box-content-buttons__read text-light border border-secondary rounded-1 mt-2"
                  >
                    Read
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 pb-5">
              <div className="cards-box">
                <div className="cards-box-bg">
                  <img
                    src={Card}
                    alt="card"
                    title="card"
                    className="cards-box-bg__img"
                  />
                </div>
                <div className="cards-box-content mt-4">
                  <h5 className="cards-box-content__title text-dark">Python</h5>
                  <p className="cards-box-content__author mt-3 mb-4">
                    David M. Beazley
                  </p>
                  <p className="cards-box-content__year mt-3">2009</p>
                </div>
                <div className="cards-box-content-buttons">
                  <div className="wrapper-flex d-flex justify-content-between">
                    <button
                      type="button"
                      className="cards-box-content-buttons__warning btn btn-warning text-dark shadow-sm"
                    >
                      Bookmark
                    </button>
                    <button
                      type="button"
                      className="cards-box-content-buttons__info btn shadow-sm fw-bold text-primary"
                    >
                      More Info
                    </button>
                  </div>
                  <button
                    type="button"
                    className="shadow-sm fw-bold cards-box-content-buttons__read text-light border border-secondary rounded-1 mt-2"
                  >
                    Read
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
