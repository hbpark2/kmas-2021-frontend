import styled from "styled-components";
import Event from "./components/Event";

const Container = styled.main`
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 30px;
  }
`;

const TreeEvent = () => {
  return (
    <Event>
      <Container>TreeEvent</Container>
    </Event>
  );
};

export default TreeEvent;
