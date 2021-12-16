import { Link } from "react-router-dom";
import styled from "styled-components";
import Utils from "../../Utils/Utils";
import LiveList from "./components/LiveList";

const Container = styled.div`
  margin-top: 75px;
  padding-bottom: 100px;

  background: url("https://thegn.speedgabia.com/kmas-2021/market/market-bg.png");
  background-size: 100%;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 20px;
    background: none;
  }
`;

export const MarketHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://thegn.speedgabia.com/kmas-2021/market/market-header-bg.png")
    no-repeat;
  background-size: cover;
  padding: 12px 0 23px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 20px 0;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const LiveBanner = styled.button`
  display: block;
  width: 930px;
  margin: 60px auto 0;
  img {
    width: 100%;
    box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.3);
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 96%;
    margin: 40px auto 20px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    img {
      display: block;
      height: 100%;
      box-shadow: none;
    }
  }
`;

const Live = () => {
  const isMobile = Utils.isMobile();
  const onReadyClick = () => {
    alert("준비중입니다.");
  };

  return (
    <Container>
      <h2 className="blind">K-MAS 라이브 마켓</h2>
      <MarketHeader>
        <img
          src="https://thegn.speedgabia.com/kmas-2021/live/live-header.png"
          alt="라이브 마켓"
        />
      </MarketHeader>
      <LiveList />
      <LiveBanner
        // href="https://v.dongbanmall.com/exhibition/3707?groupNo=all"
        // target="_blank"
        // title="기획전 바로가기"
        // rel="norefferer"
        onClick={onReadyClick}
      >
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/live/live-banner-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/live/live-banner.png"
          }
          alt="라이브커머스 바로가기"
        />
      </LiveBanner>
    </Container>
  );
};

export default Live;
