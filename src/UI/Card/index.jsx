import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  OPEN_MODAL,
  ALL_BOOKS,
  OPEN_READ_MODAL,
  FILTER_DATA
} from "../../components/action";

const index = ({ datas }) => {
  const { id } = datas;
  const { volumeInfo } = datas;
  const { title, authors, infoLink } = volumeInfo;
  const { books = [], data } = useSelector((state) => state);
  const dispatch = useDispatch();

  const bookmarkFunctions = (items) => {
    dispatch(OPEN_MODAL(true));
    const booksIndex = books.findIndex((el) => el.id === items.id);

    if (booksIndex < 0) {
      dispatch(ALL_BOOKS(items));
    }
  };

  const openReadModal = (e) => {
    const filterData = data.items.find((el) => el.id === e.target.dataset.id);
    dispatch(FILTER_DATA(filterData));
    dispatch(OPEN_READ_MODAL(true));
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
            <h5 className="cards-box-content__title text-dark"></h5>
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
                onClick={() =>
                  bookmarkFunctions({ title, authors, id, infoLink })
                }
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
              onClick={(e) => openReadModal(e)}
              data-id={id}
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
