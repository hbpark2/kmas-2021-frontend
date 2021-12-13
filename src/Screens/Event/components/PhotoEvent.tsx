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
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: 0;
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

const PhotoEvent = () => {
  const isMobile = Utils.isMobile();

  return (
    <Container>
      <h3 className="blind">포토 이벤트</h3>

      <Top>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/event/scene-5-photo/event-5-top-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/event/scene-5-photo/event-5-top.png"
          }
          alt=""
        />
      </Top>
      <Bottom>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/event/scene-5-photo/event-5-content-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/event/scene-5-photo/event-5-content.png"
          }
          alt=""
        />
      </Bottom>
    </Container>
  );
};

export default PhotoEvent;
