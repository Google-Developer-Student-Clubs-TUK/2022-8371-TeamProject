import styled from "styled-components";
import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { List, Right } from "react-bootstrap/lib/Media";
import address from "../assets/address.png";
import checker from "../assets/checker.png";
import { useQuery, useQueryClient } from "react-query";

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

function SideBarList() {
  const queryClient = useQueryClient();
  const queryData: any = queryClient.getQueryData("Disasters");
  const [Disasters, setDisasters] = useState(queryData.result);
  console.log(Disasters);
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
        <div style={{ overflow: "scroll" }}>
          {Disasters.map((disaster: any) => {
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
                  <text style={{ marginLeft: "1.5vw" }}>
                    {disaster.category}
                  </text>
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
                    <div>{disaster.createdAt}</div>
                  </div>
                  <text style={{ marginTop: "0.5vh" }}>{disaster.title}</text>
                  <text
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      marginTop: "0vh",
                    }}
                  >
                    위도 : {disaster.latitude} 경도 : {disaster.longitude}
                  </text>
                </div>

                <div style={{ marginLeft: "1vw" }}>
                  <img src={checker} alt="checker" />
                </div>
                <div style={{ marginLeft: "1vw" }}>{disaster.checkNum}</div>
                <div style={{ marginLeft: "1vw" }}>
                  {disaster.checkNum >= 5 ? "등록완료" : "등록중"}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default SideBarList;
