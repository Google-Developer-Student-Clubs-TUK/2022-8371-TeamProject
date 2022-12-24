import Styled from "styled-components";

export const Container = Styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height : 4rem;
flex-direction: row;
border-radius: 20px 0px 0px 0px;
overflow: hidden;

`;

export const HeaderText = Styled.h2`
color : black;
flex-grow : 1;
text-align: center;
padding-left : 3rem;

`;

export const BackBtn = Styled.button`
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

export const BackImg = Styled.img`
width : 3rem;
height : 3rem;

`;
