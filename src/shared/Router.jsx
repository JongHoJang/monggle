import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import WalkPathPage from "../pages/WalkPathPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Search from "../pages/Search";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/walkpath" element={<ProtectedRoute element={WalkPathPage} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
