import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Container = styled.div`
  background-color: #ffffff;
  height: 8vh;
  display: flex;
  flex-direction: row
  justify-contents: center;
  aligh-items: center;
`;

const HeaderButton1 = styled.button`
  margin-top: 3vh;
  width: 4.2vw;
  height: 3vh;
  background-color: #ffffff;
  border: none;
`;
const HeaderButton2 = styled.button`
  margin-top: 3vh;
  width: 4.2vw;
  height: 3vh;
  background-color: #ffffff;
  border: none;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6px;
  margin-left: 5%;
`;

const NameBox = styled.div<{ active: boolean }>`
  height: 5px;
  width: 80px;
  background-color: #9acd32;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  box-shadow: 2px 4px 8px;
  margin-left: ${(props) => (props.active ? "80px" : "0px")};
`;

function Header() {
  const [active, setActive] = useState(false);

  const onActive1 = () => {
    setActive(false);
  };
  const onActive2 = () => {
    setActive(true);
  };

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        <div style={{ marginTop: "25px" }}>8371</div>
      </Logo>

      <div style={{ flexDirection: "column", marginLeft: "80vw" }}>
        <div>
          <HeaderButton1 onClick={onActive1}>재난목록</HeaderButton1>
          <HeaderButton2 onClick={onActive2}>재난등록</HeaderButton2>
        </div>
        <div>
          <NameBox active={active} />
        </div>
      </div>
    </Container>
  );
}

export default Header;
