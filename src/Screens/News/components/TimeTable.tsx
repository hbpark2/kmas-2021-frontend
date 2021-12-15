import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Utils from "../../../Utils/Utils";
import { liveArr } from "../../Live/components/LiveList";
import { useState } from "react";
import { useGetLiveList } from "../../../Hook/useGetLiveList";

SwiperCore.use([Navigation]);

const Container = styled.div`
  width: 100%;
`;

const SwiperWrap = styled.div`
  width: 80%;
  padding: 0;
  margin: 50px auto 30px;

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
  color: ${(props) => (props.isActive ? props.theme.headerActive : "#000")};
  font-size: 2rem;

  span:first-child {
    font-family: ${({ theme: { accentFont } }) => accentFont};
  }

  span:last-child {
    font-family: ${({ theme: { defaultFont } }) => defaultFont};
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
  }
`;

const Schedule = styled.div`
  box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  width: 96%;
  margin: 20px auto 40px;
  background-color: #f4f4f4;
  overflow: hidden;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
  }
`;
const ScheduleHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c9ead6;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 2rem;
  padding: 15px 10px;
  color: #386b54;

  li {
    text-align: center;
  }
  .header-time {
    width: 25%;
  }
  .header-content {
    width: 50%;
  }
  .header-logo {
    width: 25%;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
  }
`;

const ScheduleRow = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  padding: 12px 0;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  border-bottom: 2px solid #dadada;
  &:last-child {
    border-bottom: none;
  }
  .time {
    width: 25%;
    font-size: 2.5rem;
    text-align: center;
    color: #555;
  }
  .content {
    width: 50%;
    text-align: center;
    font-size: 1.6rem;
    color: #777;
  }
  .logo {
    width: 25%;
    display: flex;
    justify-content: flex-end;

    img {
      width: 40px;
      margin-left: 3px;
    }
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
  }
`;
const TimeTable = () => {
  const isMobile = Utils.isMobile();
  const toDay = Utils.getToday("-");
  const [liveDate, setLiveDate] = useState<string>(
    liveArr.map((live) => {
      if (live.date === toDay) {
        return live.date;
      } else {
        return "2021-12-18";
      }
    })[0]
  );

  const { data, isLoading, isError } = useGetLiveList(liveDate);

  return (
    <Container>
      <SwiperWrap>
        <Swiper
          navigation
          slidesPerView={3}
          spaceBetween={0}
          initialSlide={liveArr.findIndex((dates) => dates.date === liveDate)}
        >
          {liveArr.map((dates) => (
            <SwiperSlide key={dates.date} className="main_swiper">
              <SwiperInner>
                <Button
                  key={dates.date}
                  onClick={() => setLiveDate(dates.date)}
                  isActive={dates.date === liveDate}
                >
                  <span>{Utils.getFormatStrDate(dates.date, ".", false)}</span>
                  <span>{dates.day}</span>
                </Button>
              </SwiperInner>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
      <Schedule>
        <ScheduleHeader>
          <li className="header-time">TIME</li>
          <li className="header-content">제품</li>
          <li className="header-logo"></li>
        </ScheduleHeader>

        {!isError &&
          !isLoading &&
          data &&
          data.length > 0 &&
          data.map((live) => (
            <ScheduleRow key={live.id}>
              <li className="time">{live.start_time.slice(0, -3)}</li>
              <li className="content">
                {isMobile
                  ? Utils.ellipsis(Utils.strReplace(live.item, ",", " /"), 14)
                  : Utils.ellipsis(Utils.strReplace(live.item, ",", " /"), 27)}
              </li>
              <li className="logo">
                {live.channel.image !==
                  "https://thegn.speedgabia.com/kmas-2021/channel/logo_gachi.png" && (
                  <img src={live.channel.image} alt="로고" />
                )}
                <img
                  src="https://thegn.speedgabia.com/kmas-2021/channel/logo_gachi.png"
                  alt="로고"
                />
              </li>
            </ScheduleRow>
          ))}
      </Schedule>
    </Container>
  );
};

export default TimeTable;
