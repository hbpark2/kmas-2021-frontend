import styled from "styled-components";
import LiveList from "./components/LiveList";

const Container = styled.div`
  margin-top: 150px;
`;

const Live = () => {
  return (
    <Container>
      <LiveList />
    </Container>
  );
};

export default Live;
