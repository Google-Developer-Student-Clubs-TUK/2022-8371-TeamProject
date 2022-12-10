import React from "react";
import Styled from "styled-components";
import backbtn from "@/assets/backbtn.png";

const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height : 4rem;
  flex-direction: row;
  border-radius: 20px 0px 0px 0px;
  overflow: hidden;

`;

const HeaderText = Styled.h2`
  color : black;
  flex-grow : 1;
  text-align: center;
  padding-left : 3rem;
  
`;

const BackBtn = Styled.button`
  all: unset;
  display : flex;
  width : fit;
  height : fit;
  border-radius : 20px;
  margin-right : 1rem;
  background-color : white;
  justify-content: center;
  align-items: center;
  outline:none;
  &:hover {
    cursor : pointer;
  }
  &:focus {
    outline:none;
  }

`;

const BackImg = Styled.img`
  width : 3rem;
  height : 3rem;
  
`;

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
