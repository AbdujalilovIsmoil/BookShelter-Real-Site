import { useEffect } from "react";
import LayoutFolder from "../LayoutFolder";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const index = () => {
  const getLocal = JSON.parse(localStorage.getItem("user")) || [];
  const navigate = useNavigate();

  if (!getLocal.username && !getLocal.password) {
    useEffect(() => {
      navigate("/");
    },[]);
  }

  return (
    <>
      <LayoutFolder />
      <Outlet />
    </>
  );
};

export default index;
