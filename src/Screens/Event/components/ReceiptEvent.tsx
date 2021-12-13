import styled from "styled-components";
import { useGetChallangeList } from "../../../Hook/useGetChallangeList";

import Utils from "../../../Utils/Utils";

const Container = styled.div`
  img {
    display: block;
  }
`;

const Top = styled.div`
  img {
    width: 100%;
  }
  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
    img {
      width: 50%;
    }
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    margin-top: -50px;
  }
`;

const Bottom = styled.div`
  background-color: #386b54;
  background-image: url("https://thegn.speedgabia.com/kmas-2021/event/event-bg-snow.png");
  background-size: cover;
  padding: 120px 0 160px;
  img {
    width: 50%;
    max-width: 1320px;
    margin: 0 auto;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    img {
      width: 90%;
    }
    padding-top: 25px;
    background-image: none;
    padding-bottom: 50px;
  }
`;

const ReceiptEvent = () => {
  const isMobile = Utils.isMobile();

  return (
    <Container>
      <h3 className="blind">영수증 응모 이벤트</h3>

      <Top>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/event/scene-4-receipt/event-4-top-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/event/scene-4-receipt/event-4-top.png"
          }
          alt=""
        />
      </Top>
      <Bottom>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/event/scene-4-receipt/event-4-content-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/event/scene-4-receipt/event-4-content.png"
          }
          alt=""
        />
      </Bottom>
    </Container>
  );
};

export default ReceiptEvent;
