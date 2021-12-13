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
`;

const Bottom = styled.div`
  background-color: #a82a38;
  background-image: url("https://thegn.speedgabia.com/kmas-2021/event/event-bg-snow.png");
  background-size: cover;
  padding-bottom: 200px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 50px;
    background-image: none;
    padding-bottom: 50px;
  }
`;

const BottomHedaerWrap = styled.div`
  padding-top: 160px;
  img {
    display: block;
    margin: 0 auto;
    width: 80%;
    max-width: 1155px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 0;
  }
`;

const BottomInner = styled.div`
  background-color: #f4ead5;
  width: 94%;
  max-width: 1320px;
  margin: 0 auto;
  min-height: 100vh;
  border-radius: 25px;
  padding-top: 100px;
  overflow: hidden;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 40px;
    border-radius: 15px;
  }
`;

const InfoWrap = styled.div`
  padding-bottom: 85px;
  img {
    width: 90%;
    max-width: 1258px;
    margin: 0 auto;
  }
`;

const WayWrap = styled.div`
  background-color: #d1b2a3;
  padding: 100px 0 120px;

  img {
    width: 100%;
    margin: 0 auto;
    max-width: 1088px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 70px 0;
  }
`;

const GiftWrap = styled.div`
  position: relative;
  padding-top: 100px;
  padding: 100px 0 120px;
  img {
    display: block;
    width: 100%;
    max-width: 1161px;
    margin: 0 auto;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 35px 0;
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
`;

const SwiperWrap = styled.div`
  max-width: 1100px;
  margin: 75px auto 120px;
`;

const PhotosTitle = styled.div`
  img {
    margin: 0 auto;
    max-width: 637px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    img {
      width: 70%;
    }
  }
`;

const NoteWrap = styled.div`
  padding: 60px 150px;
  background-color: #d1b2a3;
  img {
    width: 100%;
    max-width: 970px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 20px 20px 30px;
  }
`;

const SwiperInner = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 265px;
  height: 265px;
  background-color: #d1b2a3;
  img {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
`;

const ChallangeEvent = () => {
  const { data, isLoading, isError } = useGetChallangeList();
  const isMobile = Utils.isMobile();

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
              <Swiper navigation slidesPerView={4} spaceBetween={0}>
                {!isLoading &&
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
                  })}
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
