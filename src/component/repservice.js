import React from "react";
import './style/repservice.css';

const Repservice = () => {
  return (
    <div style={{marginTop: '40px'}}>
      <h3>대표 서비스</h3>
      <h2>멀티캠퍼스는 창의와 지식 서비스로<br />조직과 개인의 경쟁력을 키우는 기업입니다.</h2>
      <div className="rep-container-wrapper">
        <div className="rep-container">
        <div className="image-container" style={{backgroundImage: "url('/banner1.jpg')"}}></div>
          <div className="rep-contents">
            <h3>컨설팅 서비스</h3>
            <p>고객의 업과 인재 육성 방향에 맞는 역량 모델링부터 교육체계수립까지 고객의 미래 가치를 생각하는 컨설팅을 제공합니다.</p>
          </div>
        </div>
        <div className="rep-container">
          <div className="image-container" style={{backgroundImage: "url('/banner2.jpg')"}}></div>
          <div className="rep-contents">
            <h3>러닝 서비스</h3>
            <p>20여 년간 기업교육 노하우를 바탕으로 기업과 임직원의 혁신과 경쟁력 향상에 기여합니다.</p>
          </div>
        </div>
        <div className="rep-container">
          <div className="image-container" style={{backgroundImage: "url('/banner3.jpg')"}}></div>
          <div className="rep-contents">
            <h3>플랫폼 서비스</h3>
            <p>혁신적인 디지털 학습환경으로 조직의 성과 및 임직원 스스로의 성장과 경력개발을 지원하는 통합러닝플랫폼을 제공합니다.</p>
          </div>
        </div>
        <div className="rep-container">
          <div className="image-container" style={{backgroundImage: "url('/banner4.jpg')"}}></div>
          <div className="rep-contents">
            <h3>BPO 서비스</h3>
            <p>고객의 인재경영 효율호와 경쟁력 강화를 위한 기업교육 프로세스 및 역량아웃소싱 서비스를 제공합니다.</p>
          </div>
        </div>
        <div className="rep-container">
          <div className="image-container" style={{backgroundImage: "url('/banner5.jpg')"}}></div>
          <div className="rep-contents">
            <h3>자격인증 서비스</h3>
            <p>외국어 및 IT 실무역량을 측정하고 수준별 교육을 제공하여 고객사의 사내 제도와 연계한 인재 육성 방법을 제시합니다.</p>
          </div>
        </div>
        <div className="rep-container">
          <div className="image-container" style={{backgroundImage: "url('/banner6.jpg')"}}></div>
          <div className="rep-contents">
            <h3>채용연계 서비스</h3>
            <p>청년 인재 양성 및 인재 추천 서비스와 중,장년 임직원을 위한 전직지원 서비스를 제공합니다.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Repservice;