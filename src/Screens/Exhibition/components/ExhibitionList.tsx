import { useState } from "react";
import styled from "styled-components";
import analytics from "../../../analytics";
import Utils from "../../../Utils/Utils";
import { liveArray, onlineArray } from "./exhibitionData";

const Container = styled.div`
  background: url("https://thegn.speedgabia.com/kmas-2021/market/market-bg.png");
  background-size: contain;
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    background: none;
    padding-bottom: 0;
  }
`;

const OnlineGrid = styled.div`
  position: relative;
  display: grid;
  background-color: #fcefef;
  padding: 100px 30px;
  margin: 150px auto 0;
  width: calc(100% - 60px);
  max-width: 1200px;
  grid-template-columns: repeat(5, 1fr);
  gap: 00px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
    padding: 50px 10px;
    margin: 100px auto 0;
  }
`;

const Banner = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -65px;
  display: block;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: 80%;
    top: -40px;
  }
`;

const ExhibitionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 100%;
    /* transform: scale(1.15); */
  }
`;

const LiveWrap = styled.div`
  position: relative;
  background-color: #effcf0;
  width: calc(100% - 60px);
  max-width: 1200px;
  margin: 150px auto 0;
  padding: 100px 30px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
    padding: 50px 10px;
    margin: 100px auto 0;
  }
`;

const LiveGrid = styled(OnlineGrid)`
  background-color: transparent;
  width: 740px;
  margin: 0 auto;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: auto;
  }
`;

const ExhibitionLiveItem = styled(ExhibitionItem)`
  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.laptop} {
    img {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

const SnowDecoration = styled.img`
  position: absolute;
  display: block;
  &:nth-of-type(2) {
    top: 15px;
    left: 15px;
  }
  &:nth-of-type(3) {
    top: 15px;
    right: 15px;
  }
  &:nth-of-type(4) {
    bottom: 15px;
    left: 15px;
  }
  &:nth-of-type(5) {
    bottom: 15px;
    right: 15px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    display: none;
  }
`;

const ExhibitionList = () => {
  const onExhibitionClick = ({
    name,
    startDate,
    endDate,
    active,
    link,
    alertMessage,
  }: {
    name: string;
    startDate: string;
    endDate: string;
    active: boolean;
    link: string | null;
    alertMessage?: string;
  }) => {
    if (active) {
      if (Utils.betweenDate(startDate, endDate) && link) {
        // * GA 설정
        analytics.sendEvent({
          category: "기획전",
          action: "기획전 클릭",
          label: name,
        });
        window.open(link, "_blank");
      } else if (Utils.closeDate(endDate)) {
        alert("마감되었습니다");
      } else {
        if (alertMessage) {
          alert(alertMessage);
        } else {
          alert("기획전 오픈 전입니다");
        }
      }
    } else {
      if (alertMessage) {
        alert(alertMessage);
      } else {
        alert("기획전 오픈 전입니다");
      }
    }
  };

  const exhibitionImageCreator = ({
    name,
    moImage,
    pcImage,
  }: {
    name: string;
    moImage: string | null;
    pcImage: string | null;
  }) => {
    if (pcImage) {
      return (
        <>
          <h5 className="blind">{name}</h5>
          <img src={pcImage} alt={`${name} 기획전이미지`} />
        </>
      );
    }
  };

  return (
    <Container>
      <OnlineGrid>
        <Banner
          src="https://thegn.speedgabia.com/kmas-2021/sale/sale-online-banner.png"
          alt="온라인기획전 타이틀"
        />

        <SnowDecoration
          src="https://thegn.speedgabia.com/kmas-2021/sale/snow-pink.png"
          alt="눈꽃이미지"
        />
        <SnowDecoration
          src="https://thegn.speedgabia.com/kmas-2021/sale/snow-pink.png"
          alt="눈꽃이미지"
        />
        <SnowDecoration
          src="https://thegn.speedgabia.com/kmas-2021/sale/snow-pink.png"
          alt="눈꽃이미지"
        />
        <SnowDecoration
          src="https://thegn.speedgabia.com/kmas-2021/sale/snow-pink.png"
          alt="눈꽃이미지"
        />

        {onlineArray.map((item) => {
          return (
            <ExhibitionItem key={item.name}>
              <button
                onClick={() =>
                  onExhibitionClick({
                    name: item.name,
                    startDate: item.startDate,
                    endDate: item.endDate,
                    active: item.active,
                    link: item.link,
                    alertMessage: item.alertMessage,
                  })
                }
              >
                {exhibitionImageCreator({
                  name: item.name,
                  moImage: item.moImage,
                  pcImage: item.pcImage,
                })}
              </button>
            </ExhibitionItem>
          );
        })}
      </OnlineGrid>
      <LiveWrap>
        <Banner
          src="https://thegn.speedgabia.com/kmas-2021/sale/sale-live-banner.png"
          alt="온라인기획전 타이틀"
        />
        <SnowDecoration
          src="https://thegn.speedgabia.com/kmas-2021/sale/snow-pink.png"
          alt="눈꽃이미지"
        />
        <SnowDecoration
          src="https://thegn.speedgabia.com/kmas-2021/sale/snow-pink.png"
          alt="눈꽃이미지"
        />
        <SnowDecoration
          src="https://thegn.speedgabia.com/kmas-2021/sale/snow-pink.png"
          alt="눈꽃이미지"
        />
        <SnowDecoration
          src="https://thegn.speedgabia.com/kmas-2021/sale/snow-pink.png"
          alt="눈꽃이미지"
        />
        <LiveGrid>
          {liveArray.map((item) => {
            return (
              <ExhibitionLiveItem key={item.name}>
                <button
                  onClick={() =>
                    onExhibitionClick({
                      name: item.name,
                      startDate: item.startDate,
                      endDate: item.endDate,
                      active: item.active,
                      link: item.link,
                      alertMessage: item.alertMessage,
                    })
                  }
                >
                  {exhibitionImageCreator({
                    name: item.name,
                    moImage: item.moImage,
                    pcImage: item.pcImage,
                  })}
                </button>
              </ExhibitionLiveItem>
            );
          })}
        </LiveGrid>
      </LiveWrap>
    </Container>
  );
};

export default ExhibitionList;
