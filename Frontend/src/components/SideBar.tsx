import styled from "styled-components";

export const SideBar = styled.div<{
  active: boolean;
  activeList: boolean;
  activeRegister: boolean;
}>`
  float: right;
  height: 92vh;
  margin-left: 100vw;
  width: ${(props) => (props.active ? "35vw" : "35vw")};
  background-color: #ffffff;
  border-radius: 10px;
  transform: ${(props) =>
    props.activeList || props.activeRegister
      ? "translatex(-100%)"
      : "translatex(0%)"};
  transition: transform 0.2s ease-in-out;
  box-shadow: 2px 4px 8px;
  position: absolute;
  z-index: 3;
`;
