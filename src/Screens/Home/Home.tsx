import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import KeyVisualImg from "../../Assets/main.png";
import CardImg from "../../Assets/card.png";

SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]);

const Container = styled.main`
	width: 100%;
	margin: 0;
	padding: 0;
	height: ${({ theme: { fullHeight } }) => fullHeight};
`;

const KeyVisualWrap = styled.article`
	width: 100%;
	height: ${({ theme: { fullHeight } }) => fullHeight};
`;

const KeyVisual = styled.img`
	display: block;
	width: 100%;
	max-width: 1710px;
	margin: 0 auto;
`;

const CardWrap = styled.article`
	margin: 50px auto 150px;
`;

const Card = styled.img`
	display: block;
	margin: 0 auto;
	transform: translateX(10px);
`;

const SwiperWrap = styled.div`
	margin: 0 auto;
	padding-bottom: 100px;
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
		}
		.swiper-button-prev {
			margin-left: 20px;
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
				font-size: 2.2rem;
			}
		}
		.swiper-button-prev {
			margin-left: -5px;
			&::after {
				font-size: 2.2rem;
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

			<KeyVisualWrap>
				<KeyVisual src={KeyVisualImg} alt="키비주얼" />
			</KeyVisualWrap>
			<CardWrap>
				<Card src={CardImg} alt="card" />
			</CardWrap>

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
