import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminContainer = styled.div`
  margin: 5rem;
  padding: 2rem;
  background-color: #dddddd26;
  border-radius: 12px;
  font-size: 1.3rem;
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

function AdminPage() {
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
    }
  ];
  // 로컬 스토리지에 데이터 저장
  localStorage.setItem('members', JSON.stringify(members));
  // 로컬 스토리지에서 데이터 가져오기
  const storedMembers = JSON.parse(localStorage.getItem('members'));


  return (
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
  );
}

export default AdminPage;
