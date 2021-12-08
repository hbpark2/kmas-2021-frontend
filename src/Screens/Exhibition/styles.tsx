import styled from "styled-components";

export const Container = styled.main`
  /* padding-bottom: 100px; */
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 60px;
  }
`;
export const MarketHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 380px;
  background: url("https://thegn.speedgabia.com/kmas-2021/market/market-header-bg.png")
    no-repeat;
  background-size: cover;
  margin-bottom: 150px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    height: auto;
    margin-bottom: 70px;

    img {
      width: 100%;
      height: auto;
      margin: 20px 0 15px;
    }
  }
`;
