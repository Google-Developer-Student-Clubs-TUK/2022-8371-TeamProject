import Styled from "styled-components";

export const Container = Styled.div`
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

export const TitleLabel = Styled.label`
  font-size : 1.6rem;
  color:black;
  
  margin-left : 10px;
  font-weight : bold;
  margin: 10px 0 40px;
`;

export const TextLabel = Styled.label`
  font-size : 1rem;
  color:black;
  font-weight : bold;
`;

export const TextBox = Styled.text`
  display : flex;
  justify-content: center;
  align-items: center;
  font-size : 1rem;
  width : 18rem;
  height : 1.5rem;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  background-color : white;
  color : black;
  margin: 10px 0 40px;
  box-shadow: 2px 2px 2px #BDBDBD;
  outline:none;
`;
