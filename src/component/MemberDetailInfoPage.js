
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const AdminContainer = styled.div`
  margin: 5rem;
  padding: 1rem;
  background-color: #dddddd26;
  border-radius: 12px;
  font-size: 1.2rem;
/*   width: 50rem; */
  box-shadow: 2px 2px 10px #ccc;

`;

const InfoContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  margin: 3rem;
  padding: 2rem;
/*   width: 40rem; */
  box-shadow: 2px 2px 10px #ccc;

`
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
  background-color: white;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.7rem;
  background-color: #7B65F6;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    background-color: #654ea3;
  }
`;

function MemberDetailInfoPage() {
  const { id } = useParams(); // URL 파라미터에서 id 가져오기
  const [member, setMember] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 회원 정보 데이터 가져오기
    const storedMembers = JSON.parse(localStorage.getItem('members'));
    if (storedMembers && id < storedMembers.length) {
      setMember(storedMembers[id]);
    }
  }, [id]);

  if (!member) {
    return <div>회원 정보를 불러오는 중입니다...</div>;
  }

  return (
    <AdminContainer>
      <div>
        <h1>{member.name}님의 상세 정보</h1>
        <InfoContainer>

          <Table>
            <tbody>
              <tr>
                <Th>이메일</Th>
                <Td>{member.email}</Td>
              </tr>
              <tr>
                <Th>전화번호</Th>
                <Td>{member.phone}</Td>
              </tr>
              <tr>
                <Th>주소</Th>
                <Td>{member.address}</Td>
              </tr>
            </tbody>
          </Table>
<br/>
        </InfoContainer>
        <StyledLink to="/admin">뒤로 가기</StyledLink>
      </div>
    </AdminContainer>
  );
}

export default MemberDetailInfoPage;
