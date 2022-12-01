import React from "react";
import Styled from "styled-components";
import titleimg1 from "../../../assets/titleimg1.png";
import titleimg2 from "../../../assets/titleimg2.png";
import test from "../../../assets/test.png";

const Container = Styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  border-radius: 0px 0px 0px 20px;
  overflow: hidden;
  background-color : white;
  flex : 1;
  position : relative;
`;

const TitleBox = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 10px 0 20px;
`;

const TitleLabel = Styled.label`
  font-size : 1.6rem;
  color:black;
  margin-left : 10px;
`;

const InputLabel = Styled.label`
  font-size : 1rem;
  color:black;
  font-weight : bold;
`;

const InputBox = Styled.input`
  font-size : 1rem;
  width : 18rem;
  height : 1.5rem;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  background-color : white;
  color : black;
  margin: 0 0 40px;
  box-shadow: 2px 2px 2px #BDBDBD;

`;

const SubmitBtn = Styled.button`
  all: unset;
  display : flex;
  width : 100%;
  height : 3rem;
  justify-content: center;
  align-items: center;
  background-color : #425FC6;
  border-radius: 0px 0px 0px 20px;
  position : absolute;
  bottom : 0;
  border: 1px solid  #425FC6;
  cursor : pointer;
`;

const EnrollInfoBox = () => {
  return (
    <Container>
      <TitleBox>
        <img src={titleimg1} />
        <TitleLabel>Basic Info</TitleLabel>
      </TitleBox>

      <InputLabel>재난 상황</InputLabel>
      <InputBox />
      <InputLabel>위치</InputLabel>
      <InputBox />

      <TitleBox>
        <img src={titleimg2} />
        <TitleLabel>Image Info</TitleLabel>
      </TitleBox>
      <img src={test} />
      <SubmitBtn>등록하시겠습니까?</SubmitBtn>
    </Container>
  );
};

export default EnrollInfoBox;
