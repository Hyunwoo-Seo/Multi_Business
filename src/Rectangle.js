

import React, { useState } from "react";
import styled from "styled-components";

const RectangleContainer = styled.div`
  position: relative;
  width: ${({ expanded }) => (expanded ? "310px" : "300px")};
  height: 30rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  box-shadow: 2px 2px 10px #ccc;
  transition: width 0.5s ease;
  cursor: pointer;

  
  @media screen and (max-width: 400px) {
    width: ${({ expanded }) => (expanded ? "260px" : "250px")};
  }
  @media screen and (min-width: 401px) and (max-width: 767px) {
    width: ${({ expanded }) => (expanded ? "350px" : "340px")};
  }
  @media screen and (min-width: 1450px) and (max-width: 2199px) {
    width: ${({ expanded }) => (expanded ? "400px" : "390px")};
    margin-bottom: 2rem;

  }
  @media screen and (min-width: 900px) and (max-width: 1259px) {
    width: ${({ expanded }) => (expanded ? "350px" : "340px")};
  }
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 95%;
  height: 80%;
  object-fit: cover; 
  border-radius: 15px;
  @media screen and (min-width: 1450px) and (max-width: 2199px) {
    width: 85%;
    height: 90%;
  }
`;

const Rectangle = ({imgURL}) => {
  const [expanded, setExpanded] = useState(0);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };



  return (
    <RectangleContainer
      expanded={expanded}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={imgURL} alt="Rectangle Image" />
    </RectangleContainer>
  );
};

export default Rectangle;
