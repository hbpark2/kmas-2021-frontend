import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useState } from "react";
SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]);

export const SwiperWrap = styled.div<{ buttonCurrent?: boolean }>`
  ${({ buttonCurrent }) =>
    buttonCurrent
      ? css`
          margin: 0 auto 50px;
        `
      : css`
          margin: 0 auto 200px;
        `};

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme: { headerDefault } }) => headerDefault};
  }
  .swiper-button-next {
    margin-right: 65px;
  }
  .swiper-button-prev {
    margin-left: 65px;
  }
  .videoBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-bullet {
    background-color: ${({ theme: { headerDefault } }) => headerDefault};
  }
  @media screen and (min-width: 1600px) {
    width: 1600px;
  }

  @media screen and (max-width: 1279px) {
    iframe {
      width: 85% !important;
      height: 400px !important;
    }

    .swiper-pagination {
      bottom: 10px;
    }
    .swiper-button-next {
      margin-right: 20px;
      &::after {
        font-size: 50px;
      }
    }
    .swiper-button-prev {
      margin-left: 20px;
      &::after {
        font-size: 50px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    ${({ buttonCurrent }) =>
      buttonCurrent
        ? css`
            margin: 0 auto;
          `
        : css`
            margin: 0 auto 100px;
          `};

    iframe {
      width: 85% !important;
      height: 198px !important;
    }
    .swiper-button-next {
      margin-right: -5px;
      &::after {
        font-size: 22px;
      }
    }
    .swiper-button-prev {
      margin-left: -5px;
      &::after {
        font-size: 22px;
      }
    }
    .swiper-pagination {
      span {
        width: 8px;
        height: 8px;
      }
    }
  }
`;

export const EventLinkButton = styled(Link)`
  display: block;
  margin: 0 auto;
  max-width: 700px;
  margin: 20px auto 0;
  width: 80%;
  img {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;

const SwiperSection = () => {
  const [buttonCurrent, setButtonCurrent] = useState(false);
  return (
    <>
      <SwiperWrap buttonCurrent={buttonCurrent}>
        <h3 className="blind">K-MAS CF영상</h3>
        <Swiper
          navigation
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            {({ isActive }) =>
              isActive && (
                <div className="videoBox">
                  <iframe
                    width={window.innerWidth > 1280 ? "1200px" : "80%"}
                    height={window.innerWidth > 1280 ? "675px" : "80%"}
                    src="https://www.youtube.com/embed/PQ7urgHCm4E?mute=1&autoplay=1&playlist=PQ7urgHCm4E&loop=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )
            }
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => {
              setButtonCurrent(isActive);
              return (
                isActive && (
                  <div className="videoBox">
                    <iframe
                      width={window.innerWidth > 1280 ? "1200px" : "80%"}
                      height={window.innerWidth > 1280 ? "675px" : "80%"}
                      src="https://www.youtube.com/embed/XZbyn7j5Hc4?mute=1&autoplay=1&playlist=XZbyn7j5Hc4&loop=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )
              );
            }}
          </SwiperSlide>
        </Swiper>
        {/* <Swiper
          navigation
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/PQ7urgHCm4E?mute=1&autoplay=1&playlist=PQ7urgHCm4E&loop=1"
              title="YouTube video player"
              width={window.innerWidth > 1280 ? "1200px" : "80%"}
              height={window.innerWidth > 1280 ? "675px" : "80%"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {({ isActive }) => {
              setButtonCurrent(isActive);
              return (
                isActive && (
                  <iframe
                    src="https://www.youtube.com/embed/PQ7urgHCm4E?mute=1&autoplay=1&playlist=PQ7urgHCm4E&loop=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )
              );
            }}
          </SwiperSlide>
        </Swiper> */}

        {/* <iframe
        src="https://www.youtube.com/embed/PQ7urgHCm4E?mute=1&autoplay=1&playlist=PQ7urgHCm4E&loop=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> */}
      </SwiperWrap>
      {buttonCurrent && (
        <EventLinkButton to="/event/quiz">
          <img
            src="https://thegn.speedgabia.com/kmas-2021/main/video-event-btn.png"
            alt="이벤트바로가기버튼"
          />
        </EventLinkButton>
      )}
    </>
  );
};

export default SwiperSection;
