import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;