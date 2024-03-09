import React from 'react';
import './style/Login.css';

const Login = () => {
    const validId = () => {
    };

    const validPassword = () => {
    };

    const login = () => {
    };

    return (
        <div>
            <div className='login-container'>
            <form action="#">
            <img src="/multi_logo.png"></img>
                <p>
                    <label htmlFor="id"></label>
                    <input id="id" type="text" placeholder="아이디" name="id" onChange={validId} />
                    <span id="idError" style={{ color: 'grey' }}></span>
                </p>
                <p>
                    <label htmlFor="pw"></label>
                    <input id="pw" type="text" placeholder="비밀번호" name="pw" onChange={validPassword} />
                    <span id="pwError" style={{ color: 'grey' }}></span>
                </p>
                <button id="loginButtn" type="button" onClick={login}>로그인</button>
                <nav>회원이 아니신가요? <a href="./join.html">회원가입</a></nav>
            </form>
            </div>
        </div>
    );
}

export default Login;
