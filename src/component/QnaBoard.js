import React, { useState } from 'react';
import styled from 'styled-components';
import './style/QnaBoard.css';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  position: absolute;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  h2 {
    text-align: center;
    margin: 10px 15px 15px 15px;
  }
  p {
    margin-bottom: 10px;
  }
  button {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 5px;
    background-color: #7B65F6;
    color: #ffffff
  }
`;

function QnaBoard() {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      inquiryType: "Front-end",
      name: "홍길동",
      content: "프론트엔드 강의 문의합니다."
    },
    {
      id: 2,
      inquiryType: "Java",
      name: "김철수",
      content: "자바 강의 문의합니다."
    },
    {
      id: 3,
      inquiryType: "Front-end",
      name: "이영희",
      content: "프론트 강의 문의해요."
    }
  ]);

  const [selectedInquiryContent, setSelectedInquiryContent] = useState("");
  const [selectedInquiryName, setSelectedInquiryName] = useState("");
  const [selectedInquiryType, setSelectedInquiryType] = useState("");
  const [showInquiryContent, setShowInquiryContent] = useState(false);

  const handleInquiryClick = (inquiry) => {
    setSelectedInquiryName(inquiry.name);
    setSelectedInquiryType(inquiry.inquiryType);
    setSelectedInquiryContent(inquiry.content);
    setShowInquiryContent(true);
  };

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
              <tr key={index} onClick={() => handleInquiryClick(inquiry)}>
                <td>{inquiry.id}</td>
                <td><span className="inquiry-title">{inquiry.inquiryType}</span></td>
                <td>{inquiry.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showInquiryContent && (
        <ModalOverlay>
          <ModalContent>
            <h2>{selectedInquiryType}</h2>
            <p>
              <strong>이름:</strong> {selectedInquiryName}
            </p>
            <p>
              <strong>내용:</strong> {selectedInquiryContent}
            </p>
            <button onClick={() => setShowInquiryContent(false)}>닫기</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}

export default QnaBoard;
