import React from "react";
import "./Navbar.scss";
import BookIcon from "../../assets/images/svg/navbar-icons/book.svg";
import DeleteIcon from "../../assets/images/svg/navbar-icons/delete.svg";

const index = () => {
  return (
    <>
      <div className="bg-wrapper">
        <section className="navbar bg-light">
          <div className="container">
            <div className="navbar-container bg-light">
              <div className="navbar-container-content">
                <i
                  className="navbar-container-content__times fa fa-times"
                  id="closeNavbar"
                ></i>
                <h4 className="navbar-container-content__title text-dark">
                  Bookmarks
                </h4>
                <p className="navbar-container-content__text text-dark">
                  If you don’t like to read, you haven’t found the right book
                </p>
              </div>
              <div className="navbar-container-card d-flex align-items-center justify-content-between">
                <div className="navbar-container-card-box">
                  <h6 className="navbar-container-card-box__title">Python</h6>
                  <small className="navbar-container-card-box__author">
                    David M. Beazley
                  </small>
                </div>
                <div className="navbar-container-card-box">
                  <img
                    src={BookIcon}
                    alt="book"
                    className="navbar-container-card-box__book"
                  />
                  <img
                    src={DeleteIcon}
                    alt="delete"
                    className="navbar-container-card-box__delete"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
