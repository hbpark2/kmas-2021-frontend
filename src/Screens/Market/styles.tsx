import styled from "styled-components";

export const Container = styled.main`
  padding-bottom: 100px;
  background: url("https://thegn.speedgabia.com/kmas-2021/market/market-bg.png");
  background-size: contain;
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
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

export const MarketSection = styled.div`
  padding-top: 80px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 60px;
    background: none;
  }
`;

export const MarketInner = styled.div`
  max-width: 1100px;
  width: 96%;
  margin: 0 auto;
  padding: 50px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 0;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: space-around;
  height: 75px;
  margin-bottom: 80px;
  font-size: 2.2rem;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    flex-direction: column;
    height: 210px;
    margin-bottom: 60px;
    input,
    select,
    button {
      width: 100%;
      flex: 1;
      margin: 5px 0;
    }
  }
`;

export const SelectBox = styled.select`
  border: 2px solid ${({ theme: { deepGreen } }) => deepGreen};
  flex: 1;
  margin-right: 40px;
  font-size: 2.2rem;
  border-radius: 15px;
  text-align: start;
  text-indent: 20px;
  appearance: none;
  background: url("https://thegn.speedgabia.com/kmas-2021/market/select-arrow.png")
    no-repeat right 9px center;
  color: #333;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    background-size: 2rem;
  }
`;

export const SearchInput = styled.input`
  /* width: 650px; */
  flex: 3;
  margin-right: 40px;
  font-size: 2.2rem;
  text-indent: 20px;
  border-radius: 15px;
  border: 2px solid ${({ theme: { inputBorderColor } }) => inputBorderColor};
  color: #777;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    text-indent: 10px;
  }
`;

export const SearchSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 2.2rem;
  border-radius: 15px;
  background-color: ${({ theme: { headerDefault } }) => headerDefault};
  color: #fff;
  border: none;
  img {
    margin-right: 15px;
    margin-bottom: 5px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    font-size: 2.6rem !important;
  }
`;

export const TableWrap = styled.div`
  margin: 0 auto;
  border: 1px solid ${({ theme: { inputBorderColor } }) => inputBorderColor};
  border-radius: 20px;
  overflow: hidden;
`;
export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  border-spacing: 0;
  border-radius: 5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    th,
    td {
      padding: 2px;
    }
  }
`;

export const TableHead = styled.th<{ mobileActive?: boolean }>`
  border-bottom: 1px solid ${({ theme: { gray } }) => gray};
  word-break: keep-all;
  vertical-align: middle;
  height: 55px;
  background-color: ${({ theme: { tableHeader } }) => tableHeader};
  border-left: none;
  border-right: none;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 2rem;
  line-height: 2rem;
  padding: 7px 0;

  &:first-child {
    width: 60px;
  }

  &:nth-child(2) {
    width: 200px;
  }

  &:nth-child(4) {
    width: 230px;
  }

  &:nth-child(5) {
    width: 170px;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    ${({ mobileActive, theme: { blind } }) => !mobileActive && blind};
    font-size: 2rem;
    height: 40px;

    &:nth-child(2) {
      width: 30%;
    }
    &:nth-child(3) {
      width: 70%;
    }
  }
`;

export const TableDesc = styled(TableHead).attrs({ as: "td" })`
  font-size: 1.8rem;
  background-color: rgba(255, 200, 200, 0.3);
  font-family: ${({ theme: { defaultFont } }) => defaultFont};
`;

export const TableRow = styled.tr`
  cursor: pointer;
  &:last-child {
    td {
      border-bottom: none;
    }
  }

  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.laptop} {
    &:hover {
      background-color: #ccc;
    }
  }
`;

export const DisableRow = styled.tr`
  td {
    padding: 50px 0;
  }
`;

export const RequestButton = styled.button`
  display: block;
  margin: 50px auto;
  border: none;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin: 25px auto;
    img {
      width: 80%;
    }
  }
`;

export const PromotionSection = styled.article``;
export const PromotionBanner = styled.img`
  display: block;
  margin: 0 auto 80px;
  max-width: 1330px;
  width: 100%;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 96%;
    margin-bottom: 20px;
  }
`;

export const KeyVisual = styled.img`
  display: block;
  margin: 0 auto;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.3), -3px -3px 12px rgba(0, 0, 0, 0.3);
  max-width: 1330px;
  width: 90%;
`;

export const DownloadWrap = styled.div`
  display: flex;
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    flex-direction: column;
    margin: 20px auto;
    img {
      max-width: 450px;
    }
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: 90%;
  }
`;

export const DownloadButton = styled.button`
  display: block;
  width: 48%;
  max-width: 820px;
  margin: 50px auto;
  img {
    width: 100%;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin: 5px auto;
    width: 80%;
  }
`;

export const NoteWrap = styled.article`
  dl {
    width: 90%;
    max-width: 900px;
    background-color: ${({ theme: { tableHeader } }) => tableHeader};
    padding: 20px 30px;
    margin: 20px auto;
  }
  dt {
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    font-family: ${({ theme: { accentFont } }) => accentFont};
    margin-bottom: 20px;
    h4 {
      margin-top: 4px;
      margin-left: 15px;
    }
  }

  li {
    font-size: 2rem;
    color: #a6a6a6;
    list-style: disc;
    margin: 10px 0;
    margin-left: 55px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    dt {
      margin-bottom: 10px;
    }
    dl {
      padding: 20px 12px;
    }

    li {
      width: 90%;
      margin-left: 30px;
      word-break: break-all;
      line-height: 1.4em;
    }
  }
`;
