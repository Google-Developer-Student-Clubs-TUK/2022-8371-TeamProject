import React from "react";
import Styled from "styled-components";
import EnrollHeader from "./EnrollHeader";
import EnrollInfoBox from "./EnrollInfoBox";

const EnrollBox = Styled.div`
  display: flex;
  width: 35vw;
  height: 92vh;
  /* width: 50rem;
  height: 70rem; */
  background-color: white;
  border-radius: 10px 0px 0px 10px;
  flex-direction: column;
`;

const EnrollEventBox = () => {
  return (
    <EnrollBox>
      <EnrollHeader />
      <EnrollInfoBox />
    </EnrollBox>
  );
};

export default EnrollEventBox;
