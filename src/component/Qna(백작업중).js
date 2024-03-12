import React, { useState } from "react";
import "./style/Qna.css";
import { useCookies } from "react-cookie";
import { addInquiry } from "./api/api";
import axios from "axios";

const initialValue = {
  inquiryType: "",
  name: "",
  inquirytext: "",
  email: "",
  phone: "",
};

function Qna() {
  const [cookies, setCookie, removeCookie] = useCookies();
  // const [inquiryType, setInquiryType] = useState("");
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [inquiry, setInquiry] = useState("");

  const [inquiry, setInquiry] = useState(initialValue);
  const { name, email, phone, inquiryType, inquirytext } = inquiry;

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInquiry({
      ...inquiry,
      [name]: value,
    });
  };

  const addInquiryDetails = async () => {
    const { data } = await axios.post("http://localhost:4000/inquiry", {
      headers: {
        Authorization: `Bearer ${cookies["accessToken"]}`,
      },
    });
    alert("문의 등록 완료!");
  };

  // const handleInquiryTypeChange = (e) => {
  //   setInquiryType(e.target.value);
  // };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleInquiryChange = (e) => {
  //   setInquiry(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newInquiry = {
  //     inquiryType,
  //     name,
  //     phone,
  //     email,
  //     inquirytext,
  //   };
  // };

  //   // 로컬 스토리지에 데이터 저장
  //   localStorage.setItem("inquiry", JSON.stringify(newInquiry));

  //   // 폼 초기화
  //   setInquiryType("");
  //   setName("");
  //   setPhone("");
  //   setEmail("");
  //   setInquiry("");
  // };

  return (
    <div className="center">
      <div className="container">
        <h1>문의게시판</h1>
        <form onSubmit={addInquiryDetails}>
          <div className="form-group">
            <label>문의 구분</label>
            <select
              name="inquiryType"
              value={inquiryType}
              onChange={inputChangeHandler}
            >
              <option value="">선택하세요</option>
              <option value="JAVA">JAVA</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
              <option value="Python">Python</option>
            </select>
          </div>
          <div className="form-group">
            <label>이름</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>휴대폰 번호</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>문의 내용</label>
            <textarea
              name="inquirytext"
              value={inquirytext}
              onChange={inputChangeHandler}
            />
          </div>
          <button className="btn-submit" type="submit">
            문의하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Qna;
