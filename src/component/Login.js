import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getallUsers } from "./api/api";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";

const Container = styled.div`
  width: 700px;
  margin: auto;
  background-color: rgb(236, 237, 238);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5 auto;
`;

const LoginContainer = styled.div`
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

const Title = styled.h1`
  margin-top: 100px;
  /* font-size: 3vw; */
  font-size: 50px;
  height: 60px;
  color: rgb(45, 58, 94);
`;

const Paragraph = styled.p`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 300px;
  background-color: rgb(123, 158, 252);
  color: white;

  &:hover {
    background: rgb(37, 60, 122);
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const [cookies, setCookie, removeCookie] = useCookies();

  const doLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        inputValue
      );
      setCookie("accessToken", data["accessToken"], { path: "/" });
      navigate("/userinfo");
      alert("Login Success!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Form action="#">
          <Img src="/multi_logo.png"></Img>
          <Paragraph>
            <label htmlFor="id"></label>
            <Input
              id="id"
              type="text"
              placeholder="아이디(이메일)"
              name="email"
              onChange={inputChangeHandler}
            />
            <span id="idError" style={{ color: "grey" }}></span>
          </Paragraph>
          <Paragraph>
            <label htmlFor="pw"></label>
            <Input
              id="pw"
              type="password"
              placeholder="비밀번호"
              name="password"
              onChange={inputChangeHandler}
            />
            <span id="pwError" style={{ color: "grey" }}></span>
          </Paragraph>
          <Button id="loginButton" type="button" onClick={doLogin}>
            로그인
          </Button>
          <nav>
            회원이 아니신가요? <a href="./join.html">회원가입</a>
          </nav>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
