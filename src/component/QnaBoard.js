import React, { useState, useEffect } from 'react';
import './QnaBoard.css';

function QnaBoard() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 가져오기
    const storedInquiries = JSON.parse(localStorage.getItem('inquiries')) || [];
    setInquiries(storedInquiries);
  }, []);

  return (
    <div className="center">
      <div className="container">
        <h1>문의게시판</h1>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>이름</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{inquiry.inquiryType}</td>
                <td>{inquiry.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QnaBoard;
