import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;

  ul {
    display: flex;
    list-style: none;
    flex: 1;
    justify-content: flex-end;
  }
  li {
    margin: 0 10px;
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  

`;

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <header>
      <StyledNav>
        <img src="/multi_logo.png" alt="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a onClick={() => scrollToSection("services")}>대표 서비스</a></li>
          <li><a onClick={() => scrollToSection("solutions")}>솔루션</a></li>
          <li><a href="#">문의하기</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </StyledNav>
    </header>
  );
}

export default Navbar;