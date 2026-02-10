// top-level router

import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes"
import ProtectedRoutes from "./ProtectedRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      {/* <Route path="/auth/*" element={<PrivateRoutes />} /> */}
      {/* <Route path="/app/*" element={<ProtectedRoutes />} /> */}
    </Routes>
  );
}