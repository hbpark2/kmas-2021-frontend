import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Link } from "react-router-dom";
import Utils from "../../Utils/Utils";

SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]);

const Container = styled.main`
	width: 100%;
	margin: 0;
	padding: 0;
`;

const KeyVisualWrap = styled.article`
	width: 100%;
`;

const KeyVisual = styled.img`
	display: block;
	width: 100%;
	max-width: 1710px;
	margin: 0 auto;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		margin-top: 50px;
	}
`;

const SnowSection = styled.section`
	background: url("https://thegn.speedgabia.com/kmas-2021/main/main-snowbg.png") no-repeat;
	background-size: cover;
	background-position: center center;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		background-size: contain;
	}
`;

const CardWrap = styled.article`
	margin: 0px auto 150px;
	overflow: hidden;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		margin: 0px auto 70px;
	}
`;

const Card = styled.img`
	display: block;
	margin: 0 auto;
	width: 100%;
	max-width: 1420px;
	transform: translateX(10px);
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		transform: translateX(0);
	}
`;

const SwiperWrap = styled.div`
	margin: 0 auto;
	padding-bottom: 100px;
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

	@media screen and (min-width: 1600px) {
		width: 1600px;
		margin: 0 auto;
		iframe {
			width: 85% !important;
			height: 400px !important;
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
		padding-bottom: 30px;

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

const EventLinkButton = styled(Link)`
	display: block;
	margin: 0 auto;
	max-width: 700px;
	margin: 0 auto;
	width: 80%;
	img {
		width: 100%;
	}
`;

const Home = () => {
	return (
		<Container>
			<h2 className="blind">본문 &#40;K-MAS home&#41; </h2>

			<KeyVisualWrap>
				<KeyVisual src="https://thegn.speedgabia.com/kmas-2021/main/main.png" alt="키비주얼" />
			</KeyVisualWrap>
			<SnowSection>
				<CardWrap>
					{Utils.isMobile() ? (
						<Card src="https://thegn.speedgabia.com/kmas-2021/main/mo-card.png" alt="card" />
					) : (
						<Card src="https://thegn.speedgabia.com/kmas-2021/main/card.png" alt="card" />
					)}
				</CardWrap>

				<SwiperWrap>
					<Swiper navigation spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
						<SwiperSlide
							style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
						>
							{({ isActive }) =>
								isActive && (
									<iframe
										width={window.innerWidth > 1280 ? "1200px" : "80%"}
										height={window.innerWidth > 1280 ? "675px" : "80%"}
										src="https://www.youtube.com/embed/OLTWCTsZPSw?mute=1&autoplay=1&playlist=OLTWCTsZPSw&loop=1"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								)
							}
						</SwiperSlide>
						<SwiperSlide
							style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
						>
							{({ isActive }) => {
								return (
									isActive && (
										<iframe
											width={window.innerWidth > 1280 ? "1200px" : "80%"}
											height={window.innerWidth > 1280 ? "675px" : "80%"}
											src="https://www.youtube.com/embed/X6ypu7Oh_nE?mute=1&autoplay=1&playlist=X6ypu7Oh_nE&loop=1"
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									)
								);
							}}
						</SwiperSlide>
					</Swiper>
				</SwiperWrap>
				<EventLinkButton to="/">
					<img
						src="https://thegn.speedgabia.com/kmas-2021/main/video-event-btn.png"
						alt="이벤트바로가기버튼"
					/>
				</EventLinkButton>
			</SnowSection>
		</Container>
	);
};

export default Home;
