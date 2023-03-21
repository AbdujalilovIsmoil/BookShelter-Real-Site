import React from "react";
import "./Login.scss";
import LoginLogo from "../../assets/images/svg/login-logo/login-logo.svg";

const index = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="login-container">
            <a
              className="login-container-link"
              href="../index.html"
              target="_blank"
            >
              <img
                src={LoginLogo}
                alt="login-logo"
                title="login-logo"
                className="login-container-link__img"
              />
            </a>
            <form className="login-container-form mt-5">
              <label htmlFor="#" className="w-100 position-relative">
                <input
                  type="text"
                  className="login-container-form__input form-control bg-transparent border border-1 text-light w-100"
                  placeholder="Username"
                />
                <i className="far fa-user text-light fs-5"></i>
              </label>
              <label htmlFor="#" className="w-100 position-relative my-3">
                <input
                  type="text"
                  className="login-container-form__input form-control bg-transparent border border-1 text-light w-100"
                  placeholder="password"
                />
                <i className="fas fa-lock text-light fs-5"></i>
              </label>
              <button className="login-container-form__btn btn btn-light text-primary shadow-sm w-100 text-uppercase">
                login
              </button>
              <p className="login-container-form__text text-light text-end mt-3">
                Forgot password?
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
