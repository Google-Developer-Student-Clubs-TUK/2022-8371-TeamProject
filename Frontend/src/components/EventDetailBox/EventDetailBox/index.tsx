import test from "@/assets/test.png";
import { Container, TitleLabel, TextLabel, TextBox } from "./styled";

const EnrollInfoBox = () => {
  return (
    <Container>
      <TitleLabel>Event Detail</TitleLabel>
      <img src={test} style={{ margin: 40 }} />
      <TextLabel>재난 상황</TextLabel>
      <TextBox>홍수</TextBox>

      <TextLabel>위치</TextLabel>
      <TextBox>인천 부평구 충선로203번길 24</TextBox>
    </Container>
  );
};

export default EnrollInfoBox;
