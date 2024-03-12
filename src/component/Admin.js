
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import db from './db.json'; // db.json 파일을 임포트

const AdminContainer = styled.div`
  margin: 5rem;
  padding: 2rem;
  background-color: #dddddd26;
  border-radius: 12px;
  font-size: 1.3rem;
  box-shadow: 2px 2px 10px #ccc;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 5rem;
`;

const Th = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #dddddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #dddddd;
`;

const Button = styled.button`
  width: 10rem;
  font-size: 1rem;
  padding: 0.7rem;
  margin: 1rem;
  float: right;
  background-color: #7B65F6;
  color: white;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #654ea3;
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
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ showModal }) => (showModal ? 'visible' : 'hidden')};
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

function AdminPage() {
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowMyInfo = () => {
    const adminKey = prompt('인증키를 입력하세요:');
    const admin = db.admins.find(admin => admin.key === adminKey); // db.json에서 관리자 정보 가져오기
    if (admin) {
      setCurrentAdmin(admin);
      setShowModal(true);
    } else {
      alert('인증키가 올바르지 않습니다.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <AdminContainer>
        <div>
          <h1>관리자 정보</h1>
          <Button onClick={handleShowMyInfo}>관리자 정보 보기</Button>
          <br />
          <Table>
            <thead>
              <tr>
                <Th>근무지</Th>
                <Th>이름</Th>
              </tr>
            </thead>
            <tbody>
              {db.admins.map((admin, index) => (
                <tr key={index}>
                  <Td>{admin.workspace}</Td>
                  <Td>{admin.name}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </AdminContainer>

      <AdminContainer>
        <div>
          <h1>회원 정보</h1>
          <br />
          <Table>
            <thead>
              <tr>
                <Th>문의 유형</Th>
                <Th>이름</Th>
              </tr>
            </thead>
            <tbody>
              {db.members.map((member, index) => (
                <tr key={index}>
                  <Td><Link to={{ pathname: `/admin/member/qna/${index}` }}>{member.inquiryType}</Link></Td>
                  <Td><Link to={`/admin/member/userinfo/${index}`}>{member.name}</Link></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </AdminContainer>

      <ModalOverlay showModal={showModal}>
        <ModalContent>
          {currentAdmin && (
            <>
              <div>
                <h1>{currentAdmin.name}님의 정보</h1><br />
                <p>이름: {currentAdmin.name}</p>
                <p>아이디: {currentAdmin.id}</p>
                <p>비밀번호: {currentAdmin.password}</p>
                <p>근무지: {currentAdmin.workspace}</p>
              </div>
            </>
          )}
          <Button onClick={closeModal}>닫기</Button>
        </ModalContent>
      </ModalOverlay>
    </>
  );
}

export default AdminPage;

