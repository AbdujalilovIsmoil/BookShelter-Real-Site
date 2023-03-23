import { useEffect } from "react";
import "./Login.scss";
import LoginLogo from "../../assets/images/svg/login-logo/login-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "../../UI/index";
import { EMAIL, PASSWORD, CLEAR_INPUT } from "../action";
import { useNavigate, Link } from "react-router-dom";

const index = () => {
  const { email, password } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getLocalStorageValues =
    JSON.parse(localStorage.getItem("registration")) || [];

  if (
    !getLocalStorageValues.username ||
    !getLocalStorageValues.password ||
    !getLocalStorageValues.email
  ) {
    useEffect(() => {
      navigate("/registration");
    }, []);
  }

  const addToRegistration = (e) => {
    e.preventDefault();
    const user = {
      email: email.trim().length !== 0,
      password: password.trim().length !== 0
    };

    const userValues = {
      email: email,
      password: password
    };

    if (user.email && user.password) {
      if (
        userValues.email === getLocalStorageValues.email &&
        userValues.password === getLocalStorageValues.password
      ) {
        navigate("/");
        dispatch(CLEAR_INPUT());
        localStorage.setItem("login", JSON.stringify(userValues));
      }else {
        alert("NOT FOUND");
      }
    } else {
      alert("Login is not filled");
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="login-container">
            <Link className="login-container-link" to="/">
              <img
                src={LoginLogo}
                alt="login-logo"
                title="login-logo"
                className="login-container-link__img"
              />
            </Link>
            <form
              className="login-container-form mt-5"
              onSubmit={(e) => addToRegistration(e)}
            >
              <label className="w-100 position-relative">
                <Input
                  type="email"
                  className="login-container-form__input form-control bg-transparent border border-1 text-light w-100"
                  placeholder="email"
                  value={email}
                  onChange={(e) => dispatch(EMAIL(e.target.value))}
                  required
                />
                <i className="far fa-user text-light fs-5"></i>
              </label>
              <label className="w-100 position-relative my-3">
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
