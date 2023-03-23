import { useEffect } from "react";
import "./Registration.scss";
import LoginLogo from "../../assets/images/svg/login-logo/login-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "../../UI/index";
import { USERNAME, PASSWORD, CLEAR_INPUT, EMAIL } from "../action";
import { useNavigate, Link } from "react-router-dom";

const index = () => {
  const re =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const { username, password, email } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToRegistration = (e) => {
    e.preventDefault();
    const user = {
      username: username.trim().length !== 0,
      password: password.trim().length !== 0,
      email: email.trim().length !== 0
    };

    const userValues = {
      username: username,
      password: password,
      email: email
    };

    if (user.username && user.password && user.email) {
      if (userValues.email.match(re)) {
        navigate("/login");
        localStorage.setItem("registration", JSON.stringify(userValues));
        dispatch(CLEAR_INPUT());
      } else {
        alert("EMIL NOT FOUND");
      }
    } else {
      alert("Registration is not filled");
    }
  };

  return (
    <>
      <section className="registration">
        <div className="container">
          <div className="registration-container">
            <Link className="registration-container-link" to="/">
              <img
                src={LoginLogo}
                alt="registration-logo"
                title="registration-logo"
                className="registration-container-link__img"
              />
            </Link>
            <form
              className="registration-container-form mt-5"
              onSubmit={(e) => addToRegistration(e)}
            >
              <label className="w-100 position-relative">
                <Input
                  type="text"
                  className="registration-container-form__input form-control bg-transparent border border-1 text-light w-100"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => dispatch(USERNAME(e.target.value))}
                />
                <i className="far fa-user text-light fs-5"></i>
              </label>
              <label className="w-100 position-relative my-3">
                <Input
                  type="email"
                  className="registration-container-form__input form-control bg-transparent border border-1 text-light w-100"
                  placeholder="email"
                  value={email}
                  onChange={(e) => dispatch(EMAIL(e.target.value))}
                />
                <i className="fas fa-lock text-light fs-5"></i>
              </label>
              <label className="w-100 position-relative mb-3">
                <Input
                  type="password"
                  className="registration-container-form__input form-control bg-transparent border border-1 text-light w-100"
                  placeholder="password"
                  value={password}
                  onChange={(e) => dispatch(PASSWORD(e.target.value))}
                />
                <i className="fas fa-lock text-light fs-5"></i>
              </label>
              <Button
                type="submit"
                className="registration-container-form__btn btn btn-light text-primary shadow-sm w-100 text-uppercase"
              >
                registration
              </Button>
              <p className="registration-container-form__text text-light text-end mt-3">
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
