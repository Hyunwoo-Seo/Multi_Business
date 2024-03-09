import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 2rem 0;
  font-size: 1rem;
`;

const FooterContainerLi = styled.div`
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 4rem;
  margin-left: 1rem;
  color: #ccc;

  dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 1rem;
  }

  dt {
    float: left;  // dt, dd 한 줄로 출력
    margin-right: 1.5rem;
  }
  dd {
    display: block;
    margin-inline-start: 9rem;
  }
`

// Footer 컴포넌트
const Footer = () => {
  return (
    <>
    <FooterContainer>
      <FooterContainerLi>
        <dl>
          <dt><img src="/multi_logo.png" alt="logo" /></dt>
          <dt>채용안내</dt>
          <dt>이용약관</dt>
          <dt>개인정보처리방침</dt>
          <dt>공지사항</dt>
          <dt>찾아오시는 길(본사/멀티캠퍼스 선릉·세종대·역삼)</dt>
          <dt>오픈소스라이선스</dt>
          <dt>부정제보</dt>
          <dt>Contact us</dt>
        </dl>
      </FooterContainerLi>
      <FooterContainerLi>
        <dl>
            <dt>㈜멀티캠퍼스 본사</dt>
            <dd>서울특별시 강남구 언주로 508 14층(역삼동, 서울상록빌딩)</dd>
        </dl>
        <dl>
					<dt>멀티캠퍼스 선릉</dt>
					<dd>서울특별시 강남구 선릉로 428 (대치동 889-41)</dd>
				</dl>
        <dl>
					<dt>멀티캠퍼스 세종대</dt>
					<dd>서울특별시 광진구 능동로 195-16 6층 멀티캠퍼스 세종대(세종대학교 김원관 6층)</dd>
				</dl>
        <dl>
					<dt>멀티캠퍼스 역삼</dt>
					<dd>서울특별시 강남구 테헤란로 212 (역삼동 718-5번지)</dd>
				</dl>
        <dl>
					<dt><span>대표이사 : 정석목</span></dt>
					<dd><span>사업자등록번호 : 104-81-53114</span> <span>통신판매신고번호 : 제2016-서울강남-00515호</span> 개인정보 보호책임자 : 고민정 팀장</dd>
				</dl>
        <br/>
        <hr/>
        <dl>
          <dt>고객센터1544-9001</dt>
          <dt>평일08:00~20:00</dt>
          <dt>휴일09:00~18:00(점심시간12:00~13:00제외)</dt>
        </dl>
      </FooterContainerLi>

      &copy; {new Date().getFullYear()} 멀티캠퍼스_1조. All rights reserved.
    </FooterContainer>
    </>
  );
}

export default Footer;
