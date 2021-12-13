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
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    margin-top: -50px;
  }
`;

const Bottom = styled.div`
  background-color: #386b54;
  background-image: url("https://thegn.speedgabia.com/kmas-2021/event/event-bg-snow.png");
  background-size: cover;
  padding: 120px 0 200px;
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

const TreeEvent = () => {
  const isMobile = Utils.isMobile();

  return (
    <Container>
      <h3 className="blind">크확행 트리 이벤트</h3>

      <Top>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/event/scene-3-tree/event-3-top-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/event/scene-3-tree/event-3-top.png"
          }
          alt=""
        />
      </Top>
      <Bottom>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/event/scene-3-tree/event-3-content-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/event/scene-3-tree/event-3-content.png"
          }
          alt=""
        />
      </Bottom>
    </Container>
  );
};

export default TreeEvent;
