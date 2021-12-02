import styled from "styled-components";
import Event from "./components/Event";

const Container = styled.main`
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 30px;
  }
`;

const ReceiptEvent = () => {
  return (
    <Event>
      <Container>ReceiptEvent</Container>
    </Event>
  );
};

export default ReceiptEvent;
