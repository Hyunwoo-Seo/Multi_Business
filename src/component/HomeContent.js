

import styled from "styled-components";
import Rectangle from "./Rectangle";
import TextLayOut from "./TextLayOut";
import image1 from "../img/repservice/img1.png";
import image2 from "../img/repservice/img2.png";
import image3 from "../img/repservice/img3.png";
import image4 from "../img/repservice/img4.png";
import image5 from "../img/repservice/img5.png";
import image6 from "../img/repservice/img6.png";


const HomeContainer1 = styled.div`
  background-color: #ffffff;
  padding: 1rem 3rem;
  width: calc(100% - var(--padding) * 2);
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: repeat(6, 1fr); 
  place-items: center; // 내부 요소들 가운데 정렬
/*   gap: 1rem; */

  @media screen and (max-width: 2200px) {
      grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1260px) {
      grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem 0rem;
  }


`;


const HomeContent = () => {
  return (
    <>
      <TextLayOut>
        <h1>📌멀티캠퍼스가 진행하는 과정</h1>
      </TextLayOut>
      <HomeContainer1 className="home-container">
        <Rectangle imgURL={image1} />
        <Rectangle imgURL={image2} />
        <Rectangle imgURL={image3} />
        <Rectangle imgURL={image4} />
        <Rectangle imgURL={image5} />
        <Rectangle imgURL={image6} />
      </HomeContainer1>
    </>
  );
};

export default HomeContent;
