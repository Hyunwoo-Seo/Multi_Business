import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    cursor: pointer; /* hover 시에 커서 모양 변경 */
  }
`

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
  visibility: ${({ showModal }) => (showModal ? 'visible' : 'hidden')}; /* 모달 보임 여부 설정 */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

function AdminPage() {
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const members = [
    {
      "inquiryType": "제품 문의",
      "name": "홍길동",
      "email": "hong@example.com",
      "phone": "010-1234-5678",
      "address": "서울특별시 강남구",
      "memo": "고객 요청사항이 있습니다."
    },
    {
      "inquiryType": "배송 문의",
      "name": "이몽룡",
      "email": "lee@example.com",
      "phone": "010-5678-1234",
      "address": "경기도 수원시",
      "memo": "배송이 지연되었습니다."
    },
    {
      "inquiryType": "결제 문의",
      "name": "성춘향",
      "email": "seong@example.com",
      "phone": "010-9876-5432",
      "address": "인천광역시 남동구",
      "memo": "결제 수단 변경을 요청합니다."
    },
    {
      "name": "이순신",
      "email": "soon@example.com",
      "phone": "010-1111-5432",
      "address": "",
    }
  ];
  // 로컬 스토리지에 데이터 저장
  localStorage.setItem('members', JSON.stringify(members));
  // 로컬 스토리지에서 데이터 가져오기
  const storedMembers = JSON.parse(localStorage.getItem('members'));

  const admins = [
    {
      id: "admin1",
      password: "password1",
      name: "임꺽정"
    },
    {
      id: "admin2",
      password: "password2",
      name: "강감찬"
    },
    {
      id: "admin3",
      password: "password3",
      name: "한석봉"
    }
  ];

  const handleShowMyInfo = () => {
    const currentAdminId = 'admin1'; // 임시 관리자 id 설정
    const admin = admins.find(admin => admin.id === currentAdminId);
    setCurrentAdmin(admin);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
    <AdminContainer>

      <div>
        <h1>관리자 정보</h1>
          <Button onClick={handleShowMyInfo}>내 정보 보기</Button>
        <br />
        <Table>
          <thead>
            <tr>
              <Th>아이디</Th>
              <Th>이름</Th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index}>
                <Td>{admin.id}</Td>
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
      <br/>
      <Table>
        <thead>
          <tr>
            <Th>문의 유형</Th>
            <Th>이름</Th>
          </tr>
        </thead>

        <tbody>
          {members.map((member, index) => (
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
            <h1>{currentAdmin.name}님의 정보</h1><br/>
            <p>이름: {currentAdmin.name}</p>
            <p>아이디: {currentAdmin.id}</p>
            <p>비밀번호: {currentAdmin.password}</p>
          </div>
        </>
      )}
          <Button onClick={closeModal}>닫기</Button> {/* 모달 닫기 버튼 */}
      </ModalContent>
    </ModalOverlay>
            </>
  );
}

export default AdminPage;
