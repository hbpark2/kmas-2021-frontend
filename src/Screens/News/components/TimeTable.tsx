import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Utils from "../../../Utils/Utils";
import React, { useState } from "react";
import { useGetLiveList } from "../../../Hook/useGetLiveList";
import { data } from "./concertData";

SwiperCore.use([Navigation]);

const Container = styled.div`
  width: 840px;
  background-color: #fff;
  box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 96%;
  }
`;
const Title = styled.div`
  img {
    margin: 40px auto 65px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    img {
      width: 80%;
      margin: 25px auto 30px;
    }
  }
`;
const SwiperWrap = styled.div`
  width: 80%;
  padding: 0;
  margin: 0 auto;

  .swiper-button-prev::after,
  .swiper-button-next::after {
    color: #333;
    font-size: 22px;
  }

  .swiper-container {
    height: 50px;
  }

  .swiper-button-prev {
    left: -6px;
  }

  .swiper-button-next {
    right: -6px;
  }
`;

const SwiperInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
  }
`;

const Button = styled.button<{ isActive?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${(props) => (props.isActive ? "#c60080" : "#000")};
  font-size: 2rem;

  span:first-child {
    font-family: ${({ theme: { accentFont } }) => accentFont};
  }

  span:last-child {
    font-family: ${({ theme: { defaultFont } }) => defaultFont};
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
  }
`;

const Schedule = styled.div`
  box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  width: 96%;
  margin: 15px auto 60px;
  background-color: #c60080;
  overflow: hidden;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.2);
    margin: 5px auto 40px;
  }
`;
const ScheduleHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c60080;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 2rem;
  padding: 15px 10px 10px;
  color: #fff;

  li {
    text-align: center;
  }
  .header-time {
    flex: 0.99;
  }
  .header-content {
    flex: 2;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
  }
`;

const ScheduleTop = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
  padding: 0 0 12px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
  }
  &:last-child {
    border-bottom: none;
  }
  .time {
    /* width: 260px; */
    flex: 0.99;
    font-size: 29.03px;
    text-align: center;
    color: #fff;
    background-color: #e6aad1;
    font-family: ${({ theme: { defaultFont } }) => defaultFont};
  }
  .content {
    /* width: 527px; */
    flex: 2;
    text-align: center;
    font-size: 21.43px;
    color: #c60080;
    background-color: #fff;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    .time {
      font-size: 14px;
    }
    .content {
      font-size: 12px;
    }
  }
`;

const ScheduleBottom = styled.ul<{ spaceBetween?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin: 0 6px 6px;
  li {
    width: 255px;
    &:first-child {
      border-bottom-left-radius: 15px;
      overflow: hidden;
    }
    &:last-child {
      border-bottom-right-radius: 15px;
      overflow: hidden;
    }
    word-break: keep-all;
  }
  span {
    display: block;
    text-align: center;
  }
  img {
    display: block;
    width: 100%;
    height: 132px;
  }
  .team-title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e6aad1;
    color: #fff;
    font-size: 29.03px;
    width: ${({ spaceBetween }) => !spaceBetween && "263px"};
  }
  .team-name {
    padding: 15px 0;
    font-size: 22.86px;
    color: #fff;
  }
  .team-desc {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 0 25px;
    background-color: #fff;
    color: #c60080;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    li {
      width: 100px;
    }
    img {
      height: 60px;
    }
    .team-title {
      font-size: 13px;
    }
    .team-name {
      font-size: 13px;
    }
    .team-desc {
      align-items: start;
      font-size: 12px;
      padding: 7px 3px 0;
      height: 60px;
    }
  }
`;

const Footer = styled.div``;
const FooterTop = styled.div`
  margin-bottom: 15px;
  p {
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    margin-bottom: 10px;
  }
  a {
    display: block;
    color: #777;
    text-align: center;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    p {
      font-size: 17px;
      line-height: 25px;
      margin-bottom: 5px;
    }
    a {
      font-size: 12px;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  width: 320px;
  margin: 0 auto 60px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: 210px;
    margin: 0 auto 25px;

    img {
      width: 100%;
    }
  }
`;
const Line = styled.i`
  display: block;
  width: 2px;
  height: 66px;
  background-color: #d6d6d6;
  margin: 0 30px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    margin: 0 15px;
    height: 58px;
  }
`;

const TimeTable = () => {
  const isMobile = Utils.isMobile();
  const toDay = Utils.getTodayWithoutYear(".");
  const [liveDate, setLiveDate] = useState<string>(
    data.map((live) => {
      if (live.date.substring(0, 5) === toDay) {
        return live.date;
      } else {
        return "12.18";
      }
    })[0]
  );

  console.log(liveDate);
  return (
    <Container>
      <Title>
        <img
          src="https://thegn.speedgabia.com/kmas-2021/news/concert-title.png"
          alt="콘서트배너"
        />
      </Title>

      <SwiperWrap>
        <Swiper
          navigation
          slidesPerView={isMobile ? 3 : 5}
          spaceBetween={0}
          initialSlide={data.findIndex((dates) => dates.date === liveDate)}
        >
          {data.map((dates) => (
            <SwiperSlide key={dates.date} className="main_swiper">
              <SwiperInner>
                <Button
                  key={dates.date}
                  onClick={() => setLiveDate(dates.date.substring(0, 5))}
                  isActive={dates.date.substring(0, 5) === liveDate}
                >
                  <span>
                    {Utils.getFormatStrDate(
                      dates.date.substring(0, 5),
                      ".",
                      false
                    )}
                  </span>
                  <span>{dates.date.substring(7, 8)}</span>
                </Button>
              </SwiperInner>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
      <Schedule>
        <ScheduleHeader>
          <li className="header-time">TIME</li>
          <li className="header-content">공연팀 소개</li>
        </ScheduleHeader>

        {data &&
          data.length > 0 &&
          data.map(
            (item, index) =>
              item.date.substring(0, 5) === liveDate && (
                <React.Fragment key={`schedule${index}`}>
                  <ScheduleTop>
                    {console.log(item)}
                    <li className="time">
                      {item.startTime} ~ {item.endTime}
                    </li>
                    <li className="content">
                      {item.team.map((teamItem, idx) => (
                        <span key={`teamName${idx}`}>
                          {teamItem.name}
                          {item.team.length !== idx + 1 && ","}
                          &nbsp;
                        </span>
                      ))}
                    </li>
                  </ScheduleTop>
                  <ScheduleBottom spaceBetween={item.team.length === 3}>
                    {item.team.length !== 3 && (
                      <li className="team-title">공연팀 소개</li>
                    )}

                    {item.team.map((teamItem, idx) => (
                      <li>
                        <img src={teamItem.image} alt={`팀 이미지${idx}`} />
                        <span className="team-name">{teamItem.name}</span>
                        <span className="team-desc">
                          {teamItem.description
                            .split("<br />")
                            .map((line, index) => {
                              let makeSpanKey = `line${index}`;
                              return (
                                <React.Fragment key={makeSpanKey}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              );
                            })}
                        </span>
                      </li>
                    ))}
                  </ScheduleBottom>
                </React.Fragment>
              )
          )}
      </Schedule>
      <Footer>
        <FooterTop>
          <p>
            중기부 유튜브 채널에서도
            <br />
            청춘마이크 시너지 공연을 만나보세요
          </p>
          <a
            href="https://www.youtube.com/user/bizinfo1357"
            target="_blank"
            title="유튜브 바로가기"
            rel="noreferrer"
          >
            www.youtube.com/user/bizinfo1357
          </a>
        </FooterTop>
        <FooterBottom>
          <div>
            <a
              href="https://www.youtube.com/user/bizinfo1357"
              target="_blank"
              title="유튜브 바로가기"
              rel="noreferrer"
            >
              <img
                src="https://thegn.speedgabia.com/kmas-2021/news/concert-youtube.png"
                alt="유튜브 바로가기"
              />
            </a>
          </div>
          <Line />
          <div>
            <img
              src="https://thegn.speedgabia.com/kmas-2021/news/concert-qr.png"
              alt="qr코드"
            />
          </div>
        </FooterBottom>
      </Footer>
    </Container>
  );
};

export default TimeTable;
