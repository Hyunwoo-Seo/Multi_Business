import React from 'react';
import styled from 'styled-components';
import TitleBG from '../img/TItleBG.jpeg'

const TitleContainer = styled.div`
  /* background-image: url(${TitleBG}); */
  background: linear-gradient(217deg, rgba(124, 143, 206, 0.692), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(99, 61, 204, 0.507), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(199, 192, 90, 0.445), rgba(0, 0, 255, 0) 70.71%);
  background-size: cover;
  text-align: left;
  padding: 8rem;
  width: calc(100% - var(--padding)* 2);
  height: 700px;

  @media screen and (max-width: 768px) {
      padding: 3rem;
  }

`;

const TitleText = styled.h1`
  margin: 0;
  color: #faf9f3;
  font-size: 3rem;
  padding-top: 4rem;
  text-shadow: 3px 3px 7px #292702;
`;

const SubTitle = styled.p`
  margin: 0;
  color: #535353;
  font-size: 2rem;
  padding: 1rem;
  
`


const Title = () => {
  return (
    <div className="title">
      <TitleText>개발자가 되는<br/>
        첫걸음, 멀티잇</TitleText>
      <SubTitle>멀티캠퍼스에서 제공하는 서비스를 둘러보세요.</SubTitle>
      
    </div>
  );
}

export {TitleContainer, Title};
