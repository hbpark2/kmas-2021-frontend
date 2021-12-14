import styled from "styled-components";
import { useState } from "react";
import { useGetLiveList } from "../../../Hook/useGetLiveList";
import Spinner from "../../../Components/Common/Spinner";
import Utils from "../../../Utils/Utils";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const Container = styled.div``;

const ScheduleInner = styled.div`
  max-width: 1320px;
  padding: 0 50px;
  margin: 0 auto;
`;

const SwiperWrap = styled.div`
  padding: 0 50px;
  max-width: 1000px;
  margin: 0 auto;

  .swiper-button-prev::after,
  .swiper-button-next::after {
    color: #333;
    font-size: 22px;
  }

  .swiper-container {
    height: 90px;
  }

  .swiper-button-prev {
    left: -8px;
  }

  .swiper-button-next {
    right: -8px;
  }
`;

const SwiperInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    height: 50px;
  }
`;

const Schedule = styled.div`
  box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  width: 1240px;
  margin: 20px auto 40px;
  background-color: #f4f4f4;
  overflow: hidden;
  img {
    width: 75px;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 90%;
    img {
      width: 30px;
    }
  }
`;
const ScheduleHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c9ead6;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 2.4rem;
  color: #386b54;
  padding: 25px 40px;

  li {
    text-align: center;
  }
  .header-time {
    width: 130px;
  }
  .header-content {
    width: 560px;
  }
  .header-logo {
    width: 75px;
  }
`;

const ScheduleRow = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  margin: 0 40px;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  border-bottom: 2px solid #dadada;
  &:last-child {
    border-bottom: none;
  }
  .time {
    width: 130px;
    font-size: 4.6rem;
    text-align: center;
  }
  .content {
    font-size: 3rem;
    color: #777;
  }
  .logo {
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
  font-size: 30px;

  span:first-child {
    font-family: ${({ theme: { accentFont } }) => accentFont};
  }

  span:last-child {
    font-family: ${({ theme: { defaultFont } }) => defaultFont};
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    font-size: 12px;
  }
`;

const liveArr = [
  { date: "2021-12-18", day: "토" },
  { date: "2021-12-19", day: "일" },
  { date: "2021-12-20", day: "월" },
  { date: "2021-12-21", day: "화" },
  { date: "2021-12-22", day: "수" },
  { date: "2021-12-23", day: "목" },
  { date: "2021-12-24", day: "금" },
  { date: "2021-12-25", day: "토" },
];

const LiveList = () => {
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
      <ScheduleInner>
        <SwiperWrap>
          <Swiper
            navigation
            slidesPerView={window.innerWidth > 767 ? 5 : 3}
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
                    <span>
                      {Utils.getFormatStrDate(dates.date, ".", false)}
                    </span>
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
          {isLoading && <Spinner />}
          {!isError &&
            !isLoading &&
            data &&
            data.length > 0 &&
            data.map((live) => (
              <ScheduleRow key={live.id}>
                <li className="time">{live.start_time.slice(0, -3)}</li>
                <li className="content">
                  {Utils.strReplace(live.item, ",", " /")}
                </li>
                <li className="logo">
                  <img src={live.channel.image} alt="로고" />
                </li>
              </ScheduleRow>
            ))}
        </Schedule>
      </ScheduleInner>
    </Container>
  );
};

export default LiveList;
