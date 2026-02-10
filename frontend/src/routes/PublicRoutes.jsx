import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing/Landing";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>
    </Routes>
  );
}
