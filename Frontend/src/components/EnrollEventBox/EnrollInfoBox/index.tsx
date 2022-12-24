import React, { useRef, useState } from "react";

import titleimg1 from "@/assets/titleimg1.png";
import titleimg2 from "@/assets/titleimg2.png";
import test from "@/assets/test.png";
import locationimg from "@/assets/locationimg.png";
import beforecheck from "@/assets/beforecheck.png";
import aftercheck from "@/assets/aftercheck.png";
import axios from "axios";
import {
  Container,
  FormContainer,
  TitleBox,
  TitleLabel,
  InputLabel,
  InputBox,
  ImageInputBtn,
  ImageInput,
  SubmitBtn,
  Select,
  LocationBtn,
  CheckLocation,
  Spinner,
} from "./styled";

interface EventData {
  title: string;
  content: string;
  category: string;
  images: File;
  latitude: number;
  longitude: number;
}

interface CurrentLocation {
  latitude: number;
  longitude: number;
}

const EnrollInfoBox = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [inputImg, setInputImg] = useState<File>();
  const [loc, setLoc] = useState<CurrentLocation>({
    latitude: 0,
    longitude: 0,
  });
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    hiddenFileInput.current!.click();
  };

  const handleChange = (e: any) => {
    const fileUploaded = e.target.files[0];
    setInputImg(fileUploaded);
  };

  // const handleInput1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setInput1(e.target.value);
  //   console.log(input1);
  // };
  // const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput2(e.target.value);
  //   console.log(input2);
  // };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postEventData: EventData = {
      title: e.currentTarget.eventTitle.value,
      content: e.currentTarget.eventContent.value,
      category: e.currentTarget.eventCategory.value,
      images: inputImg!,
      latitude: loc!.latitude,
      longitude: loc!.longitude,
    };
    console.log(postEventData);

    await axios
      .post("/api/v1/event", postEventData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getTest = async () => {
  //   await axios
  //     .get("api/v1/event")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  // const eventID = 1;
  // const putTest = async () => {
  //   await axios
  //     .put(`api/v1/event?id=${eventID}`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  // const config = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //   },
  // };

  const locationHandle = () => {
    setLoading(true);
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const pos: CurrentLocation = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };

            setLoc(pos);
            setLoading(false);
            console.log(pos, "location info success");
          }
        );
      } else {
        // Browser doesn't support Geolocation
        console.log("else");
      }
    } catch (err) {
      console.log("try catch error");
    }
  };

  return (
    <Container onSubmit={onSubmit}>
      <FormContainer>
        <TitleBox>
          <img src={titleimg1} />
          <TitleLabel>Basic Info</TitleLabel>
        </TitleBox>

        <InputLabel>재난 상황</InputLabel>
        <Select id="eventCategory">
          <option value="" disabled>
            Choose one
          </option>
          <option value="홍수">홍수</option>
          <option value="지진">지진</option>
          <option value="태풍">태풍</option>
          <option value="화재">화재</option>
        </Select>

        <InputLabel>제목</InputLabel>
        <InputBox id="eventTitle" />

        <InputLabel>내용</InputLabel>
        <InputBox id="eventContent" />

        <InputLabel>위치</InputLabel>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LocationBtn type="button" onClick={locationHandle}>
            <img src={locationimg}></img>
          </LocationBtn>

          {loc.latitude === 0 ? (
            <>
              {loading ? <Spinner /> : null}
              <CheckLocation src={beforecheck} />
            </>
          ) : (
            <CheckLocation src={aftercheck} />
          )}
        </div>

        <TitleBox>
          <img src={titleimg2} />
          <TitleLabel>Image Info</TitleLabel>
        </TitleBox>

        <ImageInputBtn type="button" onClick={handleClick}>
          <img src={test} />
        </ImageInputBtn>
        <ImageInput
          type="file"
          id="eventImgs"
          ref={hiddenFileInput}
          onChange={handleChange}
        ></ImageInput>
      </FormContainer>

      <SubmitBtn type="submit">등록하시겠습니까?</SubmitBtn>
    </Container>
  );
};

export default EnrollInfoBox;
