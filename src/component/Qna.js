import React, { useState } from 'react';
import './App.css';

function App() {
  const [inquiryType, setInquiryType] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleInquiryTypeChange = (e) => {
    setInquiryType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInquiryChange = (e) => {
    setInquiry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInquiry = {
      inquiryType,
      name,
      phone,
      email,
      inquiry,
    };

    // 로컬 스토리지에 데이터 저장
    localStorage.setItem('inquiry', JSON.stringify(newInquiry));

    // 폼 초기화
    setInquiryType('');
    setName('');
    setPhone('');
    setEmail('');
    setInquiry('');
  };

  return (
    <div className="center">
      <div className="container">
        <h1>문의게시판</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>문의 구분</label>
            <select value={inquiryType} onChange={handleInquiryTypeChange}>
              <option value="">선택하세요</option>
              <option value="JAVA">JAVA</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
              <option value="Python">Python</option>
            </select>
          </div>
          <div className="form-group">
            <label>이름</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label>휴대폰 번호</label>
            <input type="text" value={phone} onChange={handlePhoneChange} />
          </div>
          <div className="form-group">
            <label>이메일</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label>문의 내용</label>
            <textarea value={inquiry} onChange={handleInquiryChange} />
          </div>
          <button className="btn-submit" type="submit">문의하기</button>
        </form>
        
      </div>
    </div>
 );
}

export default App;
