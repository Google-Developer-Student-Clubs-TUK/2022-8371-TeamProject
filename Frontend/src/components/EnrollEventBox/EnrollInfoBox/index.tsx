import React, { useRef, useState } from "react";
import Styled from "styled-components";
import titleimg1 from "@/assets/titleimg1.png";
import titleimg2 from "@/assets/titleimg2.png";
import test from "@/assets/test.png";

const Container = Styled.form`
  height : 80vh;
  overflow-x : hidden;
  overflow-y : scroll;
`;

const FormContainer = Styled.div`
  display: flex;
  position : relative;
  align-items: center;
  width: 100%;
  flex-direction: column;
  border-radius: 0px 0px 0px 10px;
  background-color : white;
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
  color : black;
  margin-left : 10px;
`;

const InputLabel = Styled.label`
  color:black;
  font-weight : bold;
`;

const InputBox = Styled.input`
  width : 18rem;
  height : 1.5rem;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  background-color : white;
  color : black;
  margin: 0 0 40px;
  box-shadow: 2px 2px 2px #BDBDBD;
  outline:none;
`;

const ImageInputBtn = Styled.button`
  background-color : white;
  outline : none;
  border : 0;
  &:focus {
    outline:none;
  }
  &:hover {
    border : 0;
    outline:none;
  }
`;

const ImageInput = Styled.input`
  outline : none;
  display : none;
  &:focus {
    outline:none;
  }
`;

const SubmitBtn = Styled.button`
  all: unset;
  display : flex;
  width : 100%;
  height : 3rem;
  justify-content: center;
  align-items: center;
  background-color : #425FC6;
  border-radius: 0px 0px 0px 10px;
  position : fixed;
  bottom : 0;
  border: 1px solid  #425FC6;
  cursor : pointer;
`;

const Select = Styled.select`
  width : 15rem;
  height : 3rem;
  padding: 1px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  background-color : white;
  color : gray;
  margin: 0 0 40px;
  box-shadow: 2px 2px 2px #BDBDBD;
  outline:none;
  text-align:center;
  
  option {
    color: black;
    background: white;

  }
`;

const EnrollInfoBox = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleClick = () => {
    hiddenFileInput.current!.click();
  };

  const handleChange = (e: any) => {
    const fileUploaded = e.target.files[0];
    console.log(fileUploaded);
  };

  const handleInput1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput1(e.target.value);
    console.log(input1);
  };
  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value);
    console.log(input2);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.eventCategory.value);
    console.log(e.currentTarget.eventLocation.value);
  };

  return (
    <Container onSubmit={onSubmit}>
      <FormContainer>
        <TitleBox>
          <img src={titleimg1} />
          <TitleLabel>Basic Info</TitleLabel>
        </TitleBox>

        <InputLabel>재난 상황</InputLabel>
        <Select id="eventCategory" onChange={handleInput1}>
          <option value="" disabled>
            Choose one
          </option>
          <option value="1">홍수</option>
          <option value="2">지진</option>
          <option value="3">태풍</option>
          <option value="4">화재</option>
        </Select>

        <InputLabel>위치</InputLabel>
        <InputBox id="eventLocation" onChange={handleInput2} />

        <TitleBox>
          <img src={titleimg2} />
          <TitleLabel>Image Info</TitleLabel>
        </TitleBox>

        <ImageInputBtn type="button" onClick={handleClick}>
          <img src={test} />
        </ImageInputBtn>
        <ImageInput
          type="file"
          id="eventImgs"
          ref={hiddenFileInput}
          onChange={handleChange}
        ></ImageInput>
      </FormContainer>

      <SubmitBtn type="submit">등록하시겠습니까?</SubmitBtn>
    </Container>
  );
};

export default EnrollInfoBox;