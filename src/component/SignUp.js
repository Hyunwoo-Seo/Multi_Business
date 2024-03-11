import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 700px;
    margin: auto;
    background-color: rgb(236, 237, 238);
`;

const SignUpContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(236, 237, 238);
`;

const Img = styled.img`
    display: block;
    margin: 0 auto;
`;

const Paragraph = styled.p`
    width: 300px;
    margin: 10px 0;
`;

const Input = styled.input`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
`;

const Button = styled.button`
    margin: 0;
    font-size: 25px;
    border-radius: 4px;
    /* display: inline-block; */
    border: none;
    width: 300px;
    background-color: rgb(123, 158, 252);
    color: white;

    &:hover {
        background: rgb(37, 60, 122);
    }
`;

const SignUp = () => {
    const validSignupId = () => {};
    const validSignupPassword = () => {};
    const validConfirmPassword = () => {};
    const validformatTel = () => {};
    const validEmail = () => {};
    const signup = () => {};

    return (
        <Container>
            <SignUpContainer>
                <form action="#">
                    <Img src="/multi_logo.png" alt="Logo" />
                    <Paragraph>
                        <label htmlFor="id">아이디</label>
                        <Input id="id" type="text" placeholder="아이디" onChange={validSignupId} />
                        <span id="idNofi" style={{ color: 'grey' }}></span>
                    </Paragraph>
                    <Paragraph>
                        <label htmlFor="pw">비밀번호</label>
                        <Input id="pw" type="password" placeholder="비밀번호" onChange={validSignupPassword} />
                        <span id="pwNofi" style={{ color: 'grey' }}></span>
                    </Paragraph>
                    <Paragraph>
                        <label htmlFor="confirmPw">비밀번호 확인</label>
                        <Input id="confirmPw" type="password" placeholder="비밀번호 확인" onChange={validConfirmPassword} />
                        <span id="confirmPwNofi" style={{ color: 'grey' }}></span>
                    </Paragraph>
                    <Paragraph>
                        <label htmlFor="name">이름</label>
                        <Input id="name" type="text" placeholder="이름 입력" name="name" />
                    </Paragraph>
                    <Paragraph>
                        <label htmlFor="tel">전화번호</label>
                        <Input id="tel" type="tel" placeholder="전화번호 입력" name="tel" onChange={validformatTel} />
                        <span id="telNofi" style={{ color: 'grey' }}></span>
                    </Paragraph>
                    <Paragraph>
                        <label htmlFor="email">이메일</label>
                        <Input id="email" type="email" placeholder="이메일 입력" name="email" onChange={validEmail} />
                        <span id="emailNofi" style={{ color: 'grey' }}></span>
                    </Paragraph>
                    <Button type="button" onClick={signup}>가입하기</Button>
                </form>
            </SignUpContainer>
        </Container>
    );
}

export default SignUp;
