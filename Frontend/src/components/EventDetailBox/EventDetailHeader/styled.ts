import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height : 4rem;
  flex-direction: row;
  border-radius: 20px 0px 0px 0px;
  overflow: hidden;
`;

export const BackBtn = Styled.button`
  all: unset;
  display : flex;
  width : fit;
  height : fit;
  margin-right : 1rem;
  border-radius : 20px;
  background-color : white;
  outline:none;

  &:hover {
    cursor : pointer;
  }
  &:focus {
    outline:none;
  }

`;

export const BackImg = Styled.img`
  width : 3rem;
  height : 3rem;
  
`;
