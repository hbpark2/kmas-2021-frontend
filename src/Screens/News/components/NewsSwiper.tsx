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

SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]);

export const SwiperWrap = styled.div`
  margin: 50px auto 100px;

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
    margin: 30px auto 60px;

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

const IframeWrap = styled.div`
  iframe {
    display: block;
    margin: 0 auto;
  }
`;

const NewsListHeader = styled.div`
  img {
    display: block;
    margin: 0 auto;
    width: 90%;
    max-width: 880px;
  }
`;

const NewsSwiper = () => {
  return (
    <>
      <SwiperWrap>
        <h3 className="blind">K-MAS CF영상</h3>
        {/* <Swiper
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
                    width={window.innerWidth > 1280 ? "1260px" : "80%"}
                    height={window.innerWidth > 1280 ? "710px" : "80%"}
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
              return (
                isActive && (
                  <div className="videoBox">
                    <iframe
                      width={window.innerWidth > 1280 ? "1260px" : "80%"}
                      height={window.innerWidth > 1280 ? "710px" : "80%"}
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
        </Swiper> */}
        <NewsListHeader>
          <img
            src="https://thegn.speedgabia.com/kmas-2021/news/news-iframe-banner-1.png"
            alt="영상 타이틀"
          />
        </NewsListHeader>
        <IframeWrap>
          <iframe
            width={window.innerWidth > 1280 ? "1260px" : "80%"}
            height={window.innerWidth > 1280 ? "709px" : "80%"}
            src="https://www.youtube.com/embed/4KXuOHNd32Y?mute=1&autoplay=1&playlist=4KXuOHNd32Y&loop=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </IframeWrap>
      </SwiperWrap>
    </>
  );
};

export default NewsSwiper;
