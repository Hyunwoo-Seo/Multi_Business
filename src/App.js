import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/navbar";
import Repservice from "./component/repservice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Solution from "./component/Solution";
import Qna from "./component/Qna";
import UserInfoPage from "./component/Mypage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Repservice />
        <Solution />
        <Routes>
          <Route path="/qna" element={<Qna />}></Route>
          <Route path="/userinfo" element={<UserInfoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
