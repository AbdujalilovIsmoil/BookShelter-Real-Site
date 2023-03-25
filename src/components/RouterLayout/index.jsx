import { useEffect } from "react";
import LayoutFolder from "../LayoutFolder";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const index = () => {
  const getRegistrationValues =
    JSON.parse(localStorage.getItem("registration")) || [];
  const getLoginValues = JSON.parse(localStorage.getItem("login")) || [];
  const navigate = useNavigate();

  if (!getRegistrationValues.username || !getRegistrationValues.password) {
    useEffect(() => {
      navigate("/registration");
    }, []);
  }

  if (!getLoginValues.email && !getLoginValues.password) {
    useEffect(() => {
      navigate("/login");
    }, []);
  }

  if (getLoginValues && getRegistrationValues) {
    useEffect(() => {
      navigate("/");
    }, []);
  }

  return (
    <>
      <LayoutFolder />
      <Outlet />
    </>
  );
};

export default index;
