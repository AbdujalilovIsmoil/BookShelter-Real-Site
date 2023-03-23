import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_MODAL } from "../../components/action";

const index = ({ volumeInfo }) => {
  const { title, authors } = volumeInfo;
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state);

  const bookmarkFunctions = (items) => {
    
    dispatch(OPEN_MODAL(true));
    console.log(items.authors.join(""));
  };

  return (
    <>
      <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 pb-5">
        <div className="cards-box">
          <div className="cards-box-bg">
            <img
              src={volumeInfo?.imageLinks?.thumbnail}
              alt="card"
              title="card"
              className="cards-box-bg__img"
            />
          </div>
          <div className="cards-box-content mt-4">
            <h5 className="cards-box-content__title text-dark">
              {volumeInfo.title}
            </h5>
            <p className="cards-box-content__author mt-3 mb-4">
              {volumeInfo.authors ? volumeInfo.authors.join("") : "NOT AUTHOR"}
            </p>
            <p className="cards-box-content__year mt-3">
              {volumeInfo.publishedDate}
            </p>
          </div>
          <div className="cards-box-content-buttons">
            <div className="wrapper-flex d-flex justify-content-between">
              <button
                type="button"
                className="cards-box-content-buttons__warning btn btn-warning text-dark shadow-sm"
                onClick={() => bookmarkFunctions({ title, authors })}
              >
                Bookmark
              </button>
              <a
                href={volumeInfo.infoLink ? volumeInfo.infoLink : "#"}
                target="_blank"
                type="button"
                className="cards-box-content-buttons__info btn shadow-sm fw-bold text-primary"
              >
                More Info
              </a>
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
    </>
  );
};

export default index;
