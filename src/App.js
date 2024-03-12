import "./App.css";
import Nav from "./component/navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Qna from "./component/Qna";
import UserInfoPage from "./component/Mypage";
import QnaBoard from "./component/QnaBoard";
import Footer from "./component/Footer";
import Home from "./component/HomeContent";
// import Login from "./component/Login";
import Title from "./component/Title";
import AdminPage from "./component/Admin";
import MemberDetailQnaPage from "./component/MemberDetailQnaPage";
import MemberDetailInfoPage from "./component/MemberDetailInfoPage";
import AdminLoginPage from "./component/AdminLogin";
import SignUp from "./component/SignUp";
import Login from "./component/Login";

function App() {
  const isLoggedIn = false;
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Title />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/qna" element={<Qna />}></Route>
          <Route path="/userinfo" element={<UserInfoPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/admin/member/qna/:id"
            element={<MemberDetailQnaPage />}
          ></Route>
          <Route
            path="/admin/member/userinfo/:id"
            element={<MemberDetailInfoPage />}
          ></Route>

          <Route
            path="/admin"
            element={isLoggedIn ? <Navigate to="/admin" /> : <AdminLoginPage />}
          ></Route>
          <Route
            path="/admin"
            element={isLoggedIn ? <AdminPage /> : <Navigate to="/admin" />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
