import React from "react";
import styled from "styled-components";
import vector1 from "../image/logo.png";
import Input from "./Input";

const main = () => {
  return (
    <Containner>
      <Form1>
        <Logo>
        <img src={vector1} alt="" />
        </Logo>
      </Form1>
      <Form2>
          <Input placeholder="Email hoặc số điện thoại"/>
          <Input type="password" placeholder="Password"/>
          <button id="no1">Đăng nhập</button>
          <button id="no2">Đăng kí tài khoản</button>
          <h3 id="n1">Tên đăng nhập</h3>
          <h3 id="n2">Nhập mật khẩu</h3>
          <button id="no3">Quên mật khẩu</button>
      </Form2>
    </Containner>
  )
}

const Form1 = styled.form`
  position: absolute;
  width: 320px;
  height: 160px;
  right: 265px;
  top: 25px;
  background: #FFFFFF;
  border: 23px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.51);
  border-radius: 20px;
`
const Form2 = styled.form`
  position: absolute;
  width: 320px;
  height: 350px;
  right: 265px;
  top: 150px;
  background: #FFFFFF;
  border: 23px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.51);
  border-radius: 20px;
  #no1{
    color: #FFFFFF;
    width: 50%;
    height: 45px;
    background: #E42024;
    border-radius: 16px;
    border: none;
    margin: 1.5rem 4rem;
    left: 150px;
    transition: all 0.2s ease-in;
  &:hover{
    transform: translateY(-3px);
  }
  }
  #no2{
    position: center;
    border: none;
    color: #E42024;
    margin: 1.5rem 5rem;
    transition: all 0.2s ease-in;
    font-size: 14px;
  &:hover{
    transform: translateY(-3px);
  }
  }
  #n1{
    position: absolute;
    width: 245px;
    height: 55px;
    left: 20px;
    top: 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #E42024;
  }
  #n2{
    position: absolute;
    width: 245px;
    height: 55px;
    left: 20px;
    top: 30%;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #E42024;
  }
  #no3{
    font-size: 15px;
    position: absolute;
    border: none;
    color: #E42024;
    top: 58%;
    right: 25px;
    transition: all 0.2s ease-in;
  &:hover{
    transform: translateY(-3px);
  }
  }
`
const Logo = styled.div`
  position: absolute;
  left: 90px;
  
`

const Containner = styled.div`
`
export default main
