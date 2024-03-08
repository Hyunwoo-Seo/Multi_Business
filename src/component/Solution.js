import React from "react";
import styled from "styled-components";
import imgAi from "../img/solution/ai.jpg";
import imgIt from "../img/solution/it.jpg";
import { FaLocationArrow } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SolutionWrapper = styled.div`
  max-width: 1000px;
  max-height: 800px;
  position: relative;
  text-align: center;
  margin: 0 auto;
`;
const SolutionHeader = styled.div`
  h2 {
    font-size: 40px;
    text-align: center;
    color: #fe6b00;
  }
  p {
    font-size: 20px;
    font-weight: bold;
  }
`;
const SolutionImg = styled.div`
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
  background-image: url(${imgAi});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const SolutionTextBox = styled.div`
  position: relative;
  margin: 0 auto;
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 15px;
  max-width: 800px;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: #fe6b00;
    transition: ease-in-out 0.3s;
  }
`;

const Solution = (props) => {
  return (
    <SolutionWrapper>
      <SolutionHeader>
        <h2>SOLUTION</h2>
        <p>
          불확실성의 시대, 지속 가능한 성장을 위한 기업의 고민에 멀티캠퍼스가
          솔루션을 제안합니다.
        </p>
      </SolutionHeader>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{ delay: 4000 }}
        style={{
          height: "600px",

          "--swiper-pagination-color": "#fe6b00",
          "--swiper-navigation-color": "#fe6b00",
        }}
      >
        <SwiperSlide>
          <SolutionImg
            style={{ backgroundImage: `url(${imgAi})` }}
          ></SolutionImg>
          <SolutionTextBox>
            <p>
              국내외 AI직무 현업역량 분석을 통해 개발된 멀티캠퍼스만의 AI교육
              체계를 기반으로 빠르게 실무에 적용 가능한 교육 프로그램을
              제공합니다.
            </p>
            <a href="/">
              <FaLocationArrow />
              자세히 보기
            </a>
          </SolutionTextBox>
        </SwiperSlide>

        <SwiperSlide>
          <SolutionImg
            style={{ backgroundImage: `url(${imgIt})` }}
          ></SolutionImg>
          <SolutionTextBox>
            <p>
              기존 인력을 디지털 핵심 인재로 전환하는 IT업스킬링·리스킬링부터,
              우리 회사에 딱 맞는 신규 IT인력을 채용하는 IT익스턴십까지
              멀티캠퍼스가 IT인재 확보를 위한 최적의 솔루션을 제시합니다.
            </p>
            <a href="/">
              <FaLocationArrow />
              자세히 보기
            </a>
          </SolutionTextBox>
        </SwiperSlide>
      </Swiper>
    </SolutionWrapper>
  );
};

export default Solution;
