import React from "react"
import styled from "styled-components"
import vector from "../image/undraw_code_thinking_re_gka2 1.png"

const slidebar = () => {
  return (
    <Container>
      <Vector>
        <img src={vector} alt=""/>
        <h3>Hệ thống hỗ trợ sinh viên tự học, tạo thời khóa biểu, theo dõi quá trình học tập</h3>
      </Vector>
    </Container>
  )
}

const Vector = styled.div`
  position: absolute;
  width: 636px;
  height: 351px;
  left: 80px;
  top: 146px;
  h3{
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 35px;
    font-style: normal;
    color: #ffff;
  }
`
const Container = styled.div`
  position: absolute;
  width: 720px;
  background-color: #E42024;
  height: 100%
`
export default slidebar
