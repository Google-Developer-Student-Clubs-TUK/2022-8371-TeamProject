import {
  EnrollBox,
  Container,
  TitleLabel,
  InputImg,
  TextLabel,
  TextBox,
  CheckBtn,
  CheckImg,
} from "./styled";

import checkimg from "@/assets/checkimg.png";
import axios from "axios";

const EventDetailBox = (props: any) => {
  const putTest = async () => {
    await axios
      .put(`api/v1/event?id=${props.data.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <EnrollBox>
      <Container>
        <TitleLabel>Event Detail</TitleLabel>
        <InputImg src={props.data.images[0]} />
        <TextLabel>재난 상황</TextLabel>
        <TextBox>{props.data.category}</TextBox>

        <TextLabel>내용</TextLabel>
        <TextBox>{props.data.content}</TextBox>

        <TextLabel>위치</TextLabel>
        <TextBox>인천 부평구 충선로203번길 24</TextBox>

        <CheckBtn onClick={putTest}>
          <CheckImg src={checkimg} />
        </CheckBtn>
      </Container>
    </EnrollBox>
  );
};

export default EventDetailBox;
