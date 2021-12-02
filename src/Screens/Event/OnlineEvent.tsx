import styled from "styled-components";
import Event from "./components/Event";

const Container = styled.main`
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 30px;
  }
`;

const OnlineEvent = () => {
  return (
    <Event>
      <Container>OnlineEvent</Container>
    </Event>
  );
};

export default OnlineEvent;
