import styled from "styled-components";
import { useGetChallangeList } from "../../../Hook/useGetChallangeList";
import Event from "../Event";

const Container = styled.div``;

const ChallangeEvent = () => {
  const { data, isLoading, isError } = useGetChallangeList();

  console.log(data);
  return (
    <Event>
      <Container>ChallangeEvent</Container>
    </Event>
  );
};

export default ChallangeEvent;
