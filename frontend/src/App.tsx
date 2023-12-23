import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export function App() {
  const accessToken = localStorage.getItem("@delliv:accessToken");
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  return (
    <BrowserRouter>
      {isAuthenticated || accessToken ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
