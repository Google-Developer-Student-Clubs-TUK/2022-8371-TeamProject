import styled from "styled-components";
import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { List, Right } from "react-bootstrap/lib/Media";
import address from "../assets/address.png";
import checker from "../assets/checker.png";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  margin-top: 2vh;

  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100vw;
  flex-direction: row;
`;
const Category = styled.select`
  margin-top: 2.5vh;
  margin-left: 2vw;
  height: 2vh;
  width: 8vw;
  text-align: center;
`;

const SortBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 14vw;
`;

let array = [
  {
    category: "전쟁",
    createdAt: "2022-12-25",
    latitude: 29.202,
    longitude: 10.101,
    checkNum: 250,
  },
  {
    category: "전쟁",
    createdAt: "2022-12-25",
    latitude: 29.202,
    longitude: 10.101,
    checkNum: 250,
  },
  {
    category: "전쟁",
    createdAt: "2022-12-25",
    latitude: 29.202,
    longitude: 10.101,
    checkNum: 250,
  },
  {
    category: "전쟁",
    createdAt: "2022-12-25",
    latitude: 29.202,
    longitude: 10.101,
    checkNum: 250,
  },
  {
    category: "전쟁",
    createdAt: "2022-12-25",
    latitude: 29.202,
    longitude: 10.101,
    checkNum: 250,
  },
  {
    category: "전쟁",
    createdAt: "2022-12-25",
    latitude: 29.202,
    longitude: 10.101,
    checkNum: 250,
  },
  {
    category: "전쟁",
    createdAt: "2022-12-25",
    latitude: 29.202,
    longitude: 10.101,
    checkNum: 250,
  },
];

const DisasterList = array.map((data) => {
  return (
    <div
      style={{
        marginLeft: "0.5vw",
        width: "34vw",
        height: "15vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ffffff",
        border: "1px solid black",
        borderRadius: "15px",
        marginBottom: "1vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "1vw",
        }}
      >
        <text style={{ fontSize: "13px", backgroundColor: "white" }}>
          재난 카테고리
        </text>
        <text style={{ marginLeft: "1.5vw" }}>{data.category}</text>
      </div>
      <div style={{ marginLeft: "1vw" }}>
        <img src={address} alt="address" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "4vh",
        }}
      >
        <div>
          <div>{data.createdAt}</div>
        </div>
        <text
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            marginTop: "2vh",
          }}
        >
          인천 부평구 총선로203번길 24
        </text>
      </div>

      <div style={{ marginLeft: "1vw" }}>
        <img src={checker} alt="checker" />
      </div>
      <div style={{ marginLeft: "1vw" }}>{data.checkNum}</div>
      <div style={{ marginLeft: "1vw" }}>
        {data.checkNum >= 5 ? "등록완료" : "등록중"}
      </div>
    </div>
  );
});

function SideBarList() {
  return (
    <>
      <Container>
        <h3
          style={{ marginLeft: "15vw", marginTop: "2vh", fontWeight: "bold" }}
        >
          재난 목록
        </h3>

        <Header>
          <Category>
            <option key="지진" value="지진">
              지진
            </option>
            <option key="해일" value="해일">
              해일
            </option>
            <option key="기타" value="기타">
              기타
            </option>
          </Category>
          <SortBox>
            <h6>등록중/</h6>
            <h6>등록완료/</h6>
            <h6>최신순</h6>
            <h6>확인순</h6>
          </SortBox>
        </Header>
        <div style={{ overflow: "scroll" }}>{DisasterList}</div>
      </Container>
    </>
  );
}

export default SideBarList;
