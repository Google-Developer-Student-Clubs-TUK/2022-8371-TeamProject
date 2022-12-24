import React from "react";
import { Container, BackBtn, BackImg } from "./styled";
import backbtn from "@/assets/backbtn.png";

const EnrollHeader = () => {
  const handleClickTest = () => {
    console.log("success");
  };
  return (
    <Container>
      <BackBtn onClick={handleClickTest}>
        <BackImg src={backbtn} />
      </BackBtn>
    </Container>
  );
};

export default EnrollHeader;
