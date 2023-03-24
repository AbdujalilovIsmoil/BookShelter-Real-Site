import React from "react";
import "./Read.scss";
import Book from "../../assets/images/png/book.png";
import { useSelector, useDispatch } from "react-redux";
import { OPEN_READ_MODAL } from "../action";

const index = () => {
  const { read, filterData } = useSelector((state) => state);
  const dispatch = useDispatch();
  let classNames = "bg";
  if (read) {
    classNames += " active";
    document.body.classList.add("active");
  } else {
    classNames += " ";
    document.body.classList.remove("active");
  }

  const closeReadModal = () => {
    dispatch(OPEN_READ_MODAL(false));
  };
  return (
    <>
      <div className={classNames}>
        <div className="container">
          {filterData.length ? (
            filterData.map((el) => {
              const { volumeInfo } = el;
              return (
                <div className="read" key={el.id}>
                  <div className="read-header d-flex justify-content-between align-items-center">
                    <h4 className="read-header__title">{volumeInfo.title}</h4>
                    <i
                      className="read-header__times fa fa-times"
                      onClick={() => closeReadModal()}
                    ></i>
                  </div>
                  <div className="read-book d-flex justify-content-center">
                    <img
                      src={
                        volumeInfo?.imageLinks.smallThumbnail
                          ? volumeInfo?.imageLinks.smallThumbnail
                          : "https://picsum.photos/100"
                      }
                      alt="book"
                      title="book"
                      className="read-book__book"
                    />
                  </div>
                  <div className="read-content">
                    <p className="read-content__text">
                      {volumeInfo.description
                        ? volumeInfo.description
                        : "NOT DESCRIPTION"}
                    </p>
                  </div>
                  <div className="read-about">
                    <div className="read-about-box">
                      <p className="read-about-box__key">Author:</p>
                      <div className="read-about-box-values">
                        {volumeInfo?.authors?.length
                          ? volumeInfo?.authors?.map((el) => (
                              <p
                                className="read-about-box-values__value"
                                key={el}
                              >
                                {el}
                              </p>
                            ))
                          : "NOT AUTHOR"}
                      </div>
                    </div>
                    <div className="read-about-box">
                      <p className="read-about-box__key">Published: </p>
                      <div className="read-about-box-values">
                        <p className="read-about-box-values__value">
                          {volumeInfo?.publishedDate
                            ? volumeInfo?.publishedDate
                            : "NOT PUBLISHED-DATE"}
                        </p>
                      </div>
                    </div>
                    <div className="read-about-box">
                      <p className="read-about-box__key">Publishers: </p>
                      <div className="read-about-box-values">
                        <p className="read-about-box-values__value">
                          {volumeInfo?.publisher
                            ? volumeInfo?.publisher
                            : "NOT PUBLISHER"}
                        </p>
                      </div>
                    </div>
                    <div className="read-about-box">
                      <p className="read-about-box__key">Categories: </p>
                      <div className="read-about-box-values">
                        {volumeInfo?.categories?.length
                          ? volumeInfo?.categories?.map((el) => (
                              <p
                                className="read-about-box-values__value"
                                key={el}
                              >
                                {el}
                              </p>
                            ))
                          : "NOT CATEGORIES"}
                      </div>
                    </div>
                    <div className="read-about-box">
                      <p className="read-about-box__key">Pages Count: </p>
                      <div className="read-about-box-values">
                        <p className="read-about-box-values__value">
                          {volumeInfo.pageCount
                            ? volumeInfo.pageCount
                            : "NOT PAGE-COUNT"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="read-body d-flex justify-content-end py-4">
                    <a
                      href={volumeInfo.infoLink ? volumeInfo.infoLink : "#"}
                      target="_blank"
                    >
                      <button className="read-body__btn text-light">
                        Read
                      </button>
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-center mt-3">NOT FOUND</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default index;
