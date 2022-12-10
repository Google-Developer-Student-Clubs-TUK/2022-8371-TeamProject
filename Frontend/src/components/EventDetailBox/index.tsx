import React from "react";
import Styled from "styled-components";
import EnrollHeader from "./EventDetailHeader";
import EnrollInfoBox from "./EventDetailBox";

const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height : 100vh;
  flex-direction: column;
  background-color: white;
`;

const EnrollBox = Styled.div`
  display: flex;
  width: 35rem;
  height : 45rem;
  border: 1px solid black;
  background-color: white;
  border-radius: 20px 0px 0px 20px;
  flex-direction: column;
`;

const InputBox = Styled.input`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  color : black;
`;

const EventDetailBox = () => {
  return (
    <Container>
      <EnrollBox>
        <EnrollHeader />
        <EnrollInfoBox />
      </EnrollBox>
    </Container>
  );
};

export default EventDetailBox;
