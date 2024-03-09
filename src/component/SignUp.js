import React from 'react';
import './style/SignUp.css';

const SignUp = () => {
    const validSignupId = () => {
    };

    const validSignupPassword = () => {
    };

    const validConfirmPassword = () => {
    };

    const validformatTel = () => {
    };

    const validEmail = () => {
    };

    const signup = () => {
    };

    return (
        <div>
            <div className='signup-container'>
            <form action="#">
            <img src = "/multi_logo.png"></img>
                <p>
                    <label htmlFor="id"></label>
                    <input id="id" type="text" placeholder="아이디" onChange={validSignupId} />
                    <span id="idNofi" style={{ color: 'grey' }}></span>
                </p>
                <p>
                    <label htmlFor="pw"></label>
                    <input id="pw" type="text" placeholder="비밀번호" onChange={validSignupPassword} />
                    <span id="pwNofi" style={{ color: 'grey' }}></span>
                </p>
                <p>
                    <label htmlFor="confirmPw">비밀번호 확인</label>
                    <input id="confirmPw" type="password" placeholder="비밀번호 한번 더 입력" name="confirmPassword" onChange={validConfirmPassword} />
                    <span id="confirmPwNofi" style={{ color: 'grey' }}></span>
                </p>
                <p>
                    <label htmlFor="name">이름</label>
                    <input id="name" type="text" placeholder="이름 입력" name="name" />
                </p>
                <p>
                    <label htmlFor="tel">전화번호</label>
                    <input id="tel" type="text" placeholder="숫자만 입력( '-' 생략)" name="tel" onChange={validformatTel} />
                    <span id="telNofi" style={{ color: 'grey' }}></span>
                </p>
                <p>
                    <label htmlFor="email">이메일</label>
                    <input id="email" type="email" placeholder="이메일 입력" name="email" onChange={validEmail} />
                    <span id="emailNofi" style={{ color: 'grey' }}></span>
                </p>
                <button type="button" onClick={signup}>가입하기</button>
            </form>
            </div>
        </div>
    );
}

export default SignUp;