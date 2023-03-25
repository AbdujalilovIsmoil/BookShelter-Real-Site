import React from "react";
import "./Navbar.scss";
import BookIcon from "../../assets/images/svg/navbar-icons/book.svg";
import DeleteIcon from "../../assets/images/svg/navbar-icons/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MODAL, DELETE_ITEM } from "../action";

const index = () => {
  const { modal, books = [] } = useSelector((state) => state);
  const dispatch = useDispatch();
  let classNames = "bg-wrapper";

  if (modal) {
    classNames += " active";
  } else {
    classNames += " ";
  }

  const addToModal = (e) => {
    if (
      e.target.classList.contains("bg-wrapper") ||
      e.target.classList.contains("navbar")
    ) {
      dispatch(CLOSE_MODAL(false));
    }
  };

  const deleteItem = (id) => {
    const filtered = books.filter((el) => el.id !== id);
    dispatch(DELETE_ITEM(filtered));
  };

  return (
    <>
      <div className={classNames} onClick={(e) => addToModal(e)}>
        <section className="navbar bg-light">
          <div className="container">
            <div className="navbar-container bg-light">
              <div className="navbar-container-content">
                <h4 className="navbar-container-content__title text-dark">
                  Bookmarks
                </h4>
                <p className="navbar-container-content__text text-dark">
                  If you don’t like to read, you haven’t found the right book
                </p>
              </div>
              {books.length ? (
                books.map((el) => (
                  <div
                    className="navbar-container-card d-flex align-items-center justify-content-between"
                    key={el.id}
                  >
                    <div className="navbar-container-card-box">
                      <h6 className="navbar-container-card-box__title">
                        {el.title ? el.title : "TITLE IS NOT DEFINED"}
                      </h6>
                      <small className="navbar-container-card-box__author">
                        {el.authors
                          ? el.authors.join("")
                          : "AUTHOR IS NOT DEFINED"}
                      </small>
                    </div>
                    <div className="navbar-container-card-box">
                      <a href={el.infoLink}>
                        <img
                          src={BookIcon}
                          alt="book"
                          className="navbar-container-card-box__book"
                        />
                      </a>
                      <img
                        onClick={() => deleteItem(el.id)}
                        src={DeleteIcon}
                        alt="delete"
                        className="navbar-container-card-box__delete"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <h3>NOT BOOKS</h3>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
