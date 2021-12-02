import styled from "styled-components";
import Event from "./components/Event";

const Container = styled.main`
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 30px;
  }
`;

const PhotoEvent = () => {
  return (
    <Event>
      <Container>PhotoEvent</Container>
    </Event>
  );
};

export default PhotoEvent;
