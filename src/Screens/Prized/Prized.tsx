import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Challange from "./components/Challange";
import Quiz from "./components/Quiz";
import Receipt from "./components/Receipt";

const Container = styled.main``;

const Prized: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      {location.state === "receipt" && <Receipt />}
      {location.state === "quiz" && <Quiz />}
      {location.state === "challange" && <Challange />}
    </Container>
  );
};

export default Prized;
