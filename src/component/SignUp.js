import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { addUser } from "./api/api";
import { useCookies } from "react-cookie";

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

const initialValue = {
  name: "",
  userid: "",
  password: "",
  email: "",
  phone: "",
};

const SignUp = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUser] = useState(initialValue);
  const { name, email, phone, password } = user;

  const navigate = useNavigate();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    setCookie("accessToken", user["accessToken"], { path: "/" });
    navigate("/");
    alert("회원가입 완료!");
  };

  return (
    <Container>
      <SignUpContainer>
        <form action="#">
          <Img src="/multi_logo.png" alt="Logo" />
          <Paragraph>
            <label htmlFor="email">ID(예시: example@gmail.com)</label>
            <Input
              id="email"
              type="email"
              placeholder="이메일 입력"
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
            />
            <span id="emailNofi" style={{ color: "grey" }}></span>
          </Paragraph>
          <Paragraph>
            <label htmlFor="pw">비밀번호</label>
            <Input
              id="pw"
              type="password"
              placeholder="비밀번호"
              onChange={(e) => onValueChange(e)}
              name="password"
              value={password}
            />
            <span id="pwNofi" style={{ color: "grey" }}></span>
          </Paragraph>
          {/* <Paragraph>
            <label htmlFor="confirmPw">비밀번호 확인</label>
            <Input
              id="confirmPw"
              type="password"
              placeholder="비밀번호 확인"
              onChange={validConfirmPassword}
            />
            <span id="confirmPwNofi" style={{ color: "grey" }}></span>
          </Paragraph> */}
          <Paragraph>
            <label htmlFor="name">이름</label>
            <Input
              id="name"
              type="text"
              placeholder="이름 입력"
              name="name"
              onChange={(e) => onValueChange(e)}
              value={name}
            />
          </Paragraph>
          <Paragraph>
            <label htmlFor="tel">전화번호</label>
            <Input
              id="tel"
              type="tel"
              placeholder="전화번호 입력"
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={phone}
            />
            <span id="telNofi" style={{ color: "grey" }}></span>
          </Paragraph>

          <Button onClick={() => addUserDetails()}>가입하기</Button>
        </form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
