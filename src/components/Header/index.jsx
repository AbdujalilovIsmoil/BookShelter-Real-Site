import React from "react";
import "./Header.scss";
import Logo from "../../assets/images/svg/intro/intro.svg";

const index = () => {
  return (
    <>
      <header className="header bg-light">
        <div className="container">
          <nav className="nav d-flex justify-content-between align-items-center py-3 w-100">
            <a href="./index.html" className="nav-link">
              <img
                src={Logo}
                alt="BookShelter"
                title="BookShelter"
                className="nav-link__intro"
              />
            </a>
            <form className="nav-form">
              <label htmlFor="#" className="nav-form-label">
                <i className="nav-form-label__icon fa fa-search"></i>
                <input
                  type="text"
                  className="nav-form-label__search"
                  placeholder="Search books"
                />
              </label>
            </form>
            <div className="nav-contact align-items-center gap-4 d-xxl-flex d-xl-flex d-lg-block d-md-block d-sm-block d-block mx-xxl-0 mx-xl-0 mx-lg-auto mx-md-auto mx-sm-auto mx-auto text-xxl-end text-xl-end text-lg-center text-md-center text-sm-center text-center mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-3 mt-sm-3 mt-3">
              <i className="fa fa-sun nav-contact__sun d-block mb-xxl-0 mb-xl-0 mb-lg-2 mb-md-2 mb-sm-2 mb-2"></i>
              <button
                type="button"
                className="nav-contact__btn btn btn-info text-light shadow-sm"
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      </header>
      ;
    </>
  );
};

export default index;
