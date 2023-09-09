import NotRegisteredPage from "../notRegisteredPage/NotRegisteredPage";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <NotRegisteredPage />;
  }
};

export default ProtectedRoutes;
