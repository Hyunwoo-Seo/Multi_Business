
import React, { useState, useEffect } from 'react';
import AdminPage from './Admin';
import styled from 'styled-components';

const StyledMessage = styled.h2`
  text-align: center;
`;

const Button = styled.button`
  width: 10rem;
  font-size: 1rem;
  padding: 0.7rem;
  margin: 1rem;
  
  background-color: #7B65F6;
  color: white;
  border-radius: 5px;

  &:hover {
    cursor: pointer; 
    background-color: #654ea3;
  }
`

const StyleContainer = styled.div`
  text-align: center;
  padding: 2rem;
  
`

const AdminLoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogin = () => {
    const adminId = prompt('아이디를 입력하세요:');
    const adminPassword = prompt('비밀번호를 입력하세요:');

    // 'admin1' 아이디와 'password1' 비밀번호 일치하면 로그인 성공 (임시데이터)
    if (adminId === 'admin1' && adminPassword === 'password1') {
      localStorage.setItem('isLoggedIn', true);
      setLoggedIn(true);
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn ? (
        <StyleContainer>
          <StyledMessage>관리자 페이지 접속을 위해선 관리자 아이디로 로그인 해야합니다.</StyledMessage>
          <Button onClick={handleLogin}>관리자 로그인</Button>
        </StyleContainer>
      ) : (
        <div>
          <StyledMessage>관리자 페이지에 로그인되었습니다.</StyledMessage>
          <Button onClick={handleLogout}>로그아웃</Button>
          <AdminPage />
        </div>
      )}
    </div>
  );
};

export default AdminLoginPage;
