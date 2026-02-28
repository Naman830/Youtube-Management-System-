import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import PublicLayout from "../layouts/PublicLayout"
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      <Route element={<AuthLayout />}>
        {/* // Integrated Both Sign Up an Login Page */}
        <Route path="/login" element={<Login />} /> 
        {/* <Route path="/email-verify" element={<EmailVerify />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Route>
    </Routes>
  );
}

