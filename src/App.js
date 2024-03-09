import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/navbar";
import Repservice from "./component/repservice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Solution from "./component/Solution";
import Qna from "./component/Qna";
import UserInfoPage from "./component/Mypage";
import QnaBoard from "./component/QnaBoard";
import Footer from "./component/Footer";
import Home from "./component/HomeContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Home />
        <Repservice id="services"/>
        <Solution id="solutions"/>
        <Routes>
          <Route path="/qna" element={<Qna />}></Route>
          <Route path="/userinfo" element={<UserInfoPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
