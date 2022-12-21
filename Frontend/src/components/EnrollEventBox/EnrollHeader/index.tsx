import React from "react";
import backbtn from "@/assets/backbtn.png";
import { Container, HeaderText, BackBtn, BackImg } from "./styled";

const EnrollHeader = () => {
  const handleClickTest = () => {
    console.log("success");
  };
  return (
    <Container>
      <HeaderText>Enroll Event</HeaderText>
      <BackBtn onClick={handleClickTest}>
        <BackImg src={backbtn} />
      </BackBtn>
    </Container>
  );
};

export default EnrollHeader;
