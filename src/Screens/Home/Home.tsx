import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]);

const Container = styled.main`
	width: 100%;
	margin: 0;
	height: ${({ theme: { fullHeight } }) => fullHeight};
	.swiper-container {
		width: 100%;
		height: ${({ theme: { fullHeight } }) => fullHeight};
	}
	.swiper-wrapper {
		transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}
`;

const SwiperInner = styled.div<{ bgColor?: string }>`
	/* padding-top: 100px; */
	width: 100%;
	height: ${({ theme: { fullHeight } }) => fullHeight};
	background-color: ${({ bgColor }) => bgColor || "transparent"};
`;

const SwiperWrap = styled.div`
	margin: 0 auto;
	.swiper-button-next,
	.swiper-button-prev {
		color: #333;
	}
	.swiper-button-next {
		margin-right: 65px;
	}
	.swiper-button-prev {
		margin-left: 65px;
	}
	.swiper-pagination-bullet {
		background-color: #333;
	}
	@media screen and (min-width: 1600px) {
		width: 1600px;
		margin: 0 auto;
	}

	@media screen and (max-width: 1279px) {
		iframe {
			height: 300px !important;
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

const Home = () => {
	return (
		<Container>
			<h2 className="blind">본문 &#40;K-MAS home&#41; </h2>

			<SwiperInner bgColor="rgba(0,0,0,0.3)" />

			<SwiperWrap>
				<Swiper navigation spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
					<SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						{({ isActive }) =>
							isActive && (
								<div className="videoBox">
									<iframe
										width={window.innerWidth > 1280 ? "1200px" : "80%"}
										height={window.innerWidth > 1280 ? "675px" : "80%"}
										src="https://www.youtube.com/embed/OLTWCTsZPSw?mute=1&autoplay=1&playlist=OLTWCTsZPSw&loop=1"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</div>
							)
						}
					</SwiperSlide>
					<SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						{({ isActive }) =>
							isActive && (
								<div className="videoBox">
									<iframe
										width={window.innerWidth > 1280 ? "1200px" : "80%"}
										height={window.innerWidth > 1280 ? "675px" : "80%"}
										src="https://www.youtube.com/embed/X6ypu7Oh_nE?mute=1&autoplay=1&playlist=X6ypu7Oh_nE&loop=1"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</div>
							)
						}
					</SwiperSlide>
				</Swiper>
			</SwiperWrap>
		</Container>
	);
};

export default Home;
