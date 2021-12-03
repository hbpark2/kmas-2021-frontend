import styled from "styled-components";
import { Link } from "react-router-dom";

export const SwiperWrap = styled.div`
  margin: 0 auto;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  .swiper-pagination-bullet {
    background-color: ${({ theme: { headerDefault } }) => headerDefault};
  }
  iframe {
    margin: 0 auto;
    width: 1220px;
    height: 770px;
  }

  @media screen and (min-width: 1600px) {
    width: 1600px;
    iframe {
      width: 85% !important;
    }
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
    }
    .swiper-button-prev {
      margin-left: 20px;
    }

    .swiper-button-next {
      &::after {
        font-size: 3.2rem;
      }
    }
    .swiper-button-prev {
      &::after {
        font-size: 3.2rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;

    iframe {
      width: 85% !important;
      height: 198px !important;
    }
    .swiper-button-next {
      margin-right: -5px;
    }
    .swiper-button-prev {
      margin-left: -5px;
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
  margin: 0 auto;
  width: 80%;
  img {
    width: 100%;
  }
`;

const SwiperSection = () => {
  return (
    <SwiperWrap>
      <h3 className="blind">K-MAS CF영상</h3>

      {/* <Swiper navigation spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
						<SwiperSlide
							style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
						>
							{({ isActive }) =>
								isActive && (
									<iframe
										width={window.innerWidth > 1280 ? "1200px" : "80%"}
										height={window.innerWidth > 1280 ? "675px" : "80%"}
										src="https://www.youtube.com/embed/PQ7urgHCm4E?mute=1&autoplay=1&playlist=PQ7urgHCm4E&loop=1"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								)
							}
						</SwiperSlide>
					</Swiper> */}
      <iframe
        src="https://www.youtube.com/embed/PQ7urgHCm4E?mute=1&autoplay=1&playlist=PQ7urgHCm4E&loop=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* <EventLinkButton to="/">
					<img
						src="https://thegn.speedgabia.com/kmas-2021/main/video-event-btn.png"
						alt="이벤트바로가기버튼"
					/>
				</EventLinkButton> */}
    </SwiperWrap>
  );
};

export default SwiperSection;
