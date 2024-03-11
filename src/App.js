import "./App.css";
import Nav from "./component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Qna from "./component/Qna";
import UserInfoPage from "./component/Mypage";
import QnaBoard from "./component/QnaBoard";
import Footer from "./component/Footer";
import Home from "./component/HomeContent";
// import Login from "./component/Login"; //import시 CSS충돌!!

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/qna" element={<Qna />}></Route>
          <Route path="/userinfo" element={<UserInfoPage />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
