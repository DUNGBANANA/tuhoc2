import React from "react";
import styled from "styled-components";
import Slidebar from "./Slidebar"
import Main from "./Main"
const App = () => {
  return (
    <Container>
      <Slidebar />
      <Main />
    </Container>
  )
}
const Container = styled.div`
  background-color: #E42024;
  position: relative;
  width: 1440px;
  height: 1024px;
`
export default App
