import React from "react";
import styled from "styled-components";

const input = ({type, placeholder}) => {
  return (
    <Containner>
      <StyledInput 
      placeholder={placeholder && placeholder} 
      type ={type ? type:"text"}
      required
      autoComplete="off"
      />
    </Containner>
  )
}
const StyledInput = styled.input`
  color: #E42024;
  width: 80%;
  height: 48px;
  background: #D8D0D1;
  border-radius: 16px;
  border: none;
  margin: 1.3rem 0 ;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover{
    transform: translateY(-3px);
  }
`
const Containner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
export default input
