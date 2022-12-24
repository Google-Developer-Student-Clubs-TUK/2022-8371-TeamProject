import Styled from "styled-components";

export const Container = Styled.form`
  height : 80vh;
  overflow-x : hidden;
  overflow-y : scroll;
`;

export const FormContainer = Styled.div`
  display: flex;
  position : relative;
  align-items: center;
  width: 100%;
  flex-direction: column;
  border-radius: 0px 0px 0px 10px;
  background-color : white;
`;

export const TitleBox = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 10px 0 20px;
  
`;

export const TitleLabel = Styled.label`
  font-size : 1.6rem;
  color : black;
  margin-left : 10px;
`;

export const InputLabel = Styled.label`
  color:black;
  font-weight : bold;
`;

export const InputBox = Styled.input`
  width : 18rem;
  height : 1rem;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  background-color : white;
  color : black;
  margin: 0 0 40px;
  box-shadow: 2px 2px 2px #BDBDBD;
  outline:none;
`;

export const ImageInputBtn = Styled.button`
  background-color : white;
  outline : none;
  margin-bottom : 30px;
  border : 0;
  &:focus {
    outline:none;
  }
  &:hover {
    border : 0;
    outline:none;
  }
`;

export const ImageInput = Styled.input`
  outline : none;
  display : none;
  &:focus {
    outline:none;
  }
`;

export const SubmitBtn = Styled.button`
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

export const Select = Styled.select`
  width : 15rem;
  height : 2rem;
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

export const LocationBtn = Styled.button`
  all: unset;
  display : flex;
  width : fit;
  height : fit;
  border-radius : 20px;

  padding : 1rem;
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

export const CheckLocation = Styled.img`
  display : flex;
  width : 2rem;
  height : 2rem;
  padding : 1rem;
  justify-content: center;
  align-items: center;
`;

export const Spinner = Styled.div`
  width: 1rem;
  height: 1rem;
  border: 8px solid;
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: spin-anim 1.2s ease-in-out infinite;
  
  @keyframes spin-anim {
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
}

`;
