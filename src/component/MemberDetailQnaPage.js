import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const AdminContainer = styled.div`
  margin: 5rem;
  padding: 2rem;
  background-color: #dddddd26;
  border-radius: 12px;
  font-size: 1.3rem;
  width: 50rem;

`;

const QnaContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  margin: 5rem;
  padding: 2rem;
  width: 40rem;
`

function MemberDetailQnaPage() {
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
        <h1>{member.name}님의 문의사항</h1>
        <QnaContainer>
        <p>문의 유형: {member.inquiryType}</p>
        <hr/>
        <br />
        <p>문의 내용: {member.memo}</p>
        <br/>
        </QnaContainer>

        <Link to="/admin">뒤로 가기</Link>
      </div>
    </AdminContainer>
  );
}

export default MemberDetailQnaPage;

