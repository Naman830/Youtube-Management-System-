import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import PublicLayout from "../layouts/PublicLayout"
import AuthLayout from "../layouts/AuthLayout";
import AuthForm from "../pages/auth/AuthForm";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      <Route element={<AuthLayout />}>
        {/* // Integrated Both Sign Up an Login Page */}
        <Route path="/auth" element={<AuthForm />} /> 
        {/* <Route path="/email-verify" element={<EmailVerify />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Route>
    </Routes>
  );
}

