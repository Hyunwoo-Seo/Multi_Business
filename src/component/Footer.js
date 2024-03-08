import React from 'react';
import styled from 'styled-components';

// 스타일을 정의한 컴포넌트
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
`;

// Footer 컴포넌트
const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} 멀티캠퍼스_1조. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;
