import { useState } from "react";
import styled from "styled-components";

const UserInfoContainer = styled.div`
  margin: 20px;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Header = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const UserInfoItem = styled.div`
  margin-bottom: 10px;
`;

const UserInfoLabel = styled.span`
  font-weight: bold;
`;

const UserInfoValue = styled.span`
  margin-left: 10px;
`;

const EditButton = styled.button`
  background-color: #fe6b00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
`;
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
  }
`;

const InquiryContainer = styled.div`
  margin-top: 20px;
`;

const InquiryCount = styled.span`
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
`;

const UserInfoPage = () => {
  const userInfo = {
    id: "123456",
    password: "123456",
    name: "INSIK",
    phoneNumber: "123-456-7890",
    email: "INSIK@example.com",
    inquiries: [
      {
        id: 1,
        inquiryType: "제품 문의",
        name: "INSIK",
        content: "문의 1",
      },
      {
        id: 2,
        inquiryType: "배송 문의",
        name: "INSIK",
        content: "문의 2",
      },
      {
        id: 3,
        inquiryType: "결제 문의",
        name: "INSIK",
        content: "문의 3",
      },
      {
        id: 4,
        inquiryType: "결제 문의",
        name: "USER",
        content: "문의 4",
      },
    ],
  };

  const [showInquiryContent, setShowInquiryContent] = useState(false);
  const [selectedInquiryContent, setSelectedInquiryContent] = useState("");
  const [selectedInquiryName, setSelectedInquiryName] = useState("");
  const [selectedInquiryType, setSelectedInquiryType] = useState("");

  const handleOpenModal = () => {
    const password = prompt("패스워드를 입력하세요.:");
    if (password === userInfo.password) {
      alert("패스워드 일치!");
    } else {
      alert("패스워드 불일치!");
    }
  };

  const handleShowInquiryContent = (name, type, content) => {
    setSelectedInquiryName(name);
    setSelectedInquiryType(type);
    setSelectedInquiryContent(content);
    setShowInquiryContent(true);
  };

  const userInquiries = userInfo.inquiries.filter(
    (inquiry) => inquiry.name === userInfo.name
  );

  return (
    <UserInfoContainer>
      <Header>Mypage</Header>
      <UserInfoItem>
        <UserInfoLabel>ID:</UserInfoLabel>
        <UserInfoValue>{userInfo.id}</UserInfoValue>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoLabel>Password:</UserInfoLabel>
        <UserInfoValue>************</UserInfoValue>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoLabel>이름:</UserInfoLabel>
        <UserInfoValue>{userInfo.name}</UserInfoValue>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoLabel>전화번호:</UserInfoLabel>
        <UserInfoValue>{userInfo.phoneNumber}</UserInfoValue>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoLabel>Email:</UserInfoLabel>
        <UserInfoValue>{userInfo.email}</UserInfoValue>
      </UserInfoItem>
      <EditButton onClick={handleOpenModal}>회원 정보 수정</EditButton>
      <InquiryContainer>
        <UserInfoLabel>내가 작성한 문의:</UserInfoLabel>
        {userInquiries.map((inquiry) => (
          <div key={inquiry.id}>
            <InquiryCount
              onClick={() =>
                handleShowInquiryContent(
                  inquiry.name,
                  inquiry.inquiryType,
                  inquiry.content
                )
              }
            >
              #{inquiry.id}. {inquiry.inquiryType}
            </InquiryCount>
            <br />
          </div>
        ))}
      </InquiryContainer>
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
    </UserInfoContainer>
  );
};

export default UserInfoPage;
