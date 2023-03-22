import React from "react";
import "./Login.scss";
import LoginLogo from "../../assets/images/svg/login-logo/login-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "../../UI/index";
import { USERNAME, PASSWORD, CLEAR_INPUT } from "../action";
import { useNavigate } from "react-router-dom";

const index = () => {
  const { username, password } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const addToRegistration = (e) => {
    e.preventDefault();
    const user = {
      username: username.trim().length !== 0,
      password: password.trim().length !== 0
    };

    const userValues = {
      username: username,
      password: password
    };

    if (user.username && user.password) {
      navigate("/admin");
      dispatch(CLEAR_INPUT());
      localStorage.setItem("user", JSON.stringify(userValues));
    } else {
      alert("No Correct");
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="login-container">
            <a className="login-container-link" href="#" target="_blank">
              <img
                src={LoginLogo}
                alt="login-logo"
                title="login-logo"
                className="login-container-link__img"
              />
            </a>
            <form
              className="login-container-form mt-5"
              onSubmit={(e) => addToRegistration(e)}
            >
              <label htmlFor="#" className="w-100 position-relative">
                <Input
                  type="text"
                  className="login-container-form__input form-control bg-transparent border border-1 text-light w-100"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => dispatch(USERNAME(e.target.value))}
                />
                <i className="far fa-user text-light fs-5"></i>
              </label>
              <label htmlFor="#" className="w-100 position-relative my-3">
                <Input
                  type="password"
                  className="login-container-form__input form-control bg-transparent border border-1 text-light w-100"
                  placeholder="password"
                  value={password}
                  onChange={(e) => dispatch(PASSWORD(e.target.value))}
                />
                <i className="fas fa-lock text-light fs-5"></i>
              </label>
              <Button
                type="submit"
                className="login-container-form__btn btn btn-light text-primary shadow-sm w-100 text-uppercase"
              >
                login
              </Button>
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
