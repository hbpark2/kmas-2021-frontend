import styled from "styled-components";
import Utils from "../../Utils/Utils";
import LiveList from "./components/LiveList";

const Container = styled.div`
  margin-top: 75px;
`;

export const MarketHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 370px;
  background: url("https://thegn.speedgabia.com/kmas-2021/market/market-header-bg.png")
    no-repeat;
  background-size: cover;

  img {
    height: 380px;
    margin-top: 80px;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    height: auto;
    img {
      width: 100%;
      height: auto;
      margin-top: 35px;
    }
  }
`;

const Live = () => {
  const isMobile = Utils.isMobile();

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
    </Container>
  );
};

export default Live;
