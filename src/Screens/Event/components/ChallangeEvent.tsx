import styled from "styled-components";
import { useGetChallangeList } from "../../../Hook/useGetChallangeList";
import Event from "../Event";

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Utils from "../../../Utils/Utils";
SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]);

const Container = styled.div`
  img {
    display: block;
  }
`;

const Top = styled.div`
  img {
    width: 100%;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    margin-top: -50px;
  }
`;

const Bottom = styled.div`
  background-color: #a82a38;
  background-image: url("https://thegn.speedgabia.com/kmas-2021/event/event-bg-snow.png");
  background-size: cover;
  padding-bottom: 200px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 30px;
    background-image: none;
    padding-bottom: 50px;
  }
`;

const BottomHedaerWrap = styled.div`
  padding-top: 60px;
  img {
    display: block;
    margin: 0 auto;
    width: 40%;
    max-width: 1155px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 0;
    img {
      width: 80%;
    }
  }
`;

const BottomInner = styled.div`
  background-color: #f4ead5;
  width: 50%;
  max-width: 1320px;
  min-width: 830px;
  margin: 0 auto;
  min-height: 100vh;
  border-radius: 25px;
  padding-top: 60px;
  overflow: hidden;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 94%;
    padding-top: 40px;
    border-radius: 15px;
    min-width: unset;
  }
`;

const InfoWrap = styled.div`
  padding-bottom: 50px;
  img {
    width: 90%;
    max-width: 1258px;
    margin: 0 auto;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 35px;
  }
`;

const WayWrap = styled.div`
  background-color: #d1b2a3;
  padding: 60px 0;

  img {
    width: 80%;
    margin: 0 auto;
    max-width: 1088px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    img {
      width: 100%;
    }

    padding: 35px 0;
  }
`;

const GiftWrap = styled.div`
  position: relative;
  padding-top: 100px;
  padding: 55px 0 80px;
  img {
    display: block;
    width: 90%;
    max-width: 1161px;
    margin: 0 auto;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 35px 0;
    img {
      width: 100%;
    }
  }
`;

const PhotosWarp = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    font-size: 14px;
    color: ${({ theme: { headerDefault } }) => headerDefault};
    &:after {
      font-size: 30px;
    }
  }

  .swiper-button-next {
    right: 3px;
  }

  .swiper-button-prev {
    left: 3px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  /* .swiper-wrapper {
    padding-left: 15px;
  } */
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme: { headerDefault } }) => headerDefault};
      &:after {
        font-size: 22px;
      }
    }

    .swiper-button-next {
      right: 10px;
    }

    .swiper-button-prev {
      left: 10px;
    }
  }
`;

const SwiperWrap = styled.div`
  max-width: 1100px;
  margin: 75px auto 120px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin: 45px auto 60px;
  }
`;

const PhotosTitle = styled.div`
  img {
    width: 560px;
    margin: 0 auto;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: 20px;
    img {
      width: 60%;
    }
  }
`;

const NoteWrap = styled.div`
  padding: 40px;
  background-color: #d1b2a3;
  img {
    width: 100%;
    max-width: 970px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 20px 20px 30px;
  }
`;

const SwiperInner = styled.div<{ background?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92%;
  padding-bottom: 100%;
  background-color: #d1b2a3;
  background: url(${({ background }) => background});
  background-size: 100%;
  background-position: center center;
  /* width: 250px; */
  /* height: 250px; */
  img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  /* @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 200px;
    height: 200px;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: 100px;
    height: 100px;
  } */
`;

const ChallangeEvent = () => {
  const { data, isLoading, isError } = useGetChallangeList();
  const isMobile = Utils.isMobile();
  const blankData = [
    { link: "", image: "" },
    { link: "", image: "" },
    { link: "", image: "" },
    { link: "", image: "" },
  ];
  return (
    <Container>
      <h3 className="blind">크확행챌린지</h3>

      <Top>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-2-top-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-2-top.png"
          }
          alt=""
        />
      </Top>
      <Bottom>
        <BottomHedaerWrap>
          <img
            src={
              isMobile
                ? "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-bottom-header-mo.png"
                : "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-bottom-header.png"
            }
            alt="크리스마스의 확실한 행복"
          />
        </BottomHedaerWrap>
        <BottomInner>
          <InfoWrap>
            <img
              src={
                isMobile
                  ? "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-info-mo.png"
                  : "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-info.png"
              }
              alt="크리스마스의 확실한 행복"
            />
          </InfoWrap>

          <WayWrap>
            <img
              src={
                isMobile
                  ? "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-way-mo.png"
                  : "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-way.png"
              }
              alt="퀴즈"
            />
          </WayWrap>

          <GiftWrap>
            <img
              src={
                isMobile
                  ? "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-gift-mo.png"
                  : "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-gift.png"
              }
              alt="경품 안내"
            />
          </GiftWrap>

          <PhotosWarp>
            <PhotosTitle>
              <img
                src={
                  isMobile
                    ? "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-photo-title-mo.png"
                    : "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-photo-title.png"
                }
                alt="경품 안내"
              />
            </PhotosTitle>
            <SwiperWrap>
              <Swiper
                navigation
                slidesPerView={isMobile ? 3 : 3}
                spaceBetween={0}
              >
                {/* {!isLoading &&
                  data?.map((item, index) => {
                    return (
                      <SwiperSlide key={`insta${index}`}>
                        <SwiperInner
                          href={item.link}
                          target="_blank"
                          title="인스타그램 영상"
                          rel="noreferrer"
                        >
                          <img src={item.image} alt="인스타그램 이미지" />
                        </SwiperInner>
                      </SwiperSlide>
                    );
                  })} */}
                {blankData.map((item, index) => (
                  <SwiperSlide key={`insta${index}`}>
                    {/* <SwiperInner
                      href={item.link}
                      target="_blank"
                      title="인스타그램 영상"
                      rel="noreferrer"
                      background="https://kmas2021.s3.amazonaws.com/media/event/challange/2021%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%8F%E1%85%A6%E1%86%BA_%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5-01.jpg"
                    /> */}
                    <SwiperInner background="https://kmas2021.s3.amazonaws.com/media/event/challange/2021%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%84%8F%E1%85%A6%E1%86%BA_%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5-01.jpg" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperWrap>
          </PhotosWarp>
          <NoteWrap>
            <img
              src={
                isMobile
                  ? "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-note-mo.png"
                  : "https://thegn.speedgabia.com/kmas-2021/event/online-2-challange/event-online-note.png"
              }
              alt="유의사항"
            />
          </NoteWrap>
        </BottomInner>
      </Bottom>
    </Container>
  );
};

export default ChallangeEvent;
