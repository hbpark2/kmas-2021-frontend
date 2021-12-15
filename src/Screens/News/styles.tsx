import styled from "styled-components";

export const Container = styled.main`
  padding-bottom: 100px;
  background: url("https://thegn.speedgabia.com/kmas-2021/market/market-bg.png");
  background-size: contain;
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    background: none;
    padding-bottom: 30px;
  }
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

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    height: auto;
    img {
      width: 100%;
      height: auto;
      margin: 15px 0;
    }
  }
`;

export const NewsBanner = styled.button`
  display: block;
  width: 80%;
  padding: 10px;
  text-align: center;
  margin: 50px auto;
`;
