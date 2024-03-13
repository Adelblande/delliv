import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "./store";
import GlobalStyles from "./styles/GlobalStyles";

export function App() {
  const accessToken = localStorage.getItem("@delliv:accessToken");
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated || accessToken) {
      return navigate("/");
    } else {
      return navigate("/login");
    }
  }, [isAuthenticated, accessToken]);

  return (
    <>
      <Outlet />
      <GlobalStyles />
      <ToastContainer theme="colored" autoClose={1500} />
    </>
  );
}
