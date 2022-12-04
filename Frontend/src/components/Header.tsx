import styled from "styled-components";
import logo from "../assets/logo.png";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SideBar } from "./SideBar";
const Container = styled.div`
  background-color: #ffffff;
  height: 8vh;
  display: flex;
  flex-direction: row
  justify-contents: center;
  aligh-items: center;
`;
const Container2 = styled.div`
  margin-left: 75vw;
  flex-direction: row;
`;

const HeaderButton1 = styled.button`
  margin-top: 3vh;
  width: 65px;
  height: 3vh;
  background-color: #ffffff;
  border: none;
`;

const HeaderButton2 = styled.button`
  margin-left:4px;
  margin-top: 3vh;
  width: 65px
  height: 3vh;
  background-color: #ffffff;
  border: none;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5vw;
`;

const NameBox = styled.div<{
  active: boolean;
  activeList: boolean;
  activeRegister: boolean;
}>`
  height: 0.6vh;
  width: 65px;
  background-color: ${(props) =>
    props.activeList || props.activeRegister ? "#9acd32" : "#e2e2e2"};
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  box-shadow: 2px 4px 8px;
  margin-left: ${(props) => (props.active ? "65px" : "0px")};
`;

const Slider = styled.div<{ active: boolean }>`
  height: 92vh;
  width: 50vw
  background-color: #aacd32;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  box-shadow: 2px 4px 8px;
  margin-left: ${(props) => (props.active ? "65px" : "0px")};
`;

function Header() {
  const [active, setActive] = useState(false);
  const [activeList, setActiveList] = useState(false);
  const [activeRegister, setActiveRegister] = useState(false);

  const onActive1 = () => {
    setActive(false);
    setActiveList(!activeList);
    setActiveRegister(false);
  };
  const onActive2 = () => {
    setActive(true);
    setActiveRegister(!activeRegister);
    setActiveList(false);
  };

  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
          <div style={{ marginTop: "3.5vh" }}>8371</div>
        </Logo>
        <Container2>
          <div>
            <HeaderButton1 onClick={onActive1}>재난목록</HeaderButton1>
            <HeaderButton2 onClick={onActive2}>재난등록</HeaderButton2>
          </div>
          <div>
            <NameBox
              active={active}
              activeList={activeList}
              activeRegister={activeRegister}
            />
          </div>
        </Container2>
      </Container>
      <SideBar
        active={activeList}
        activeList={activeList}
        activeRegister={activeRegister}
      >
        {activeList ? "재난목록" : "재난등록"}
      </SideBar>
    </>
  );
}

export default Header;
