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
		position: fixed;
		width: 100%;
		height: ${({ theme: { fullHeight } }) => fullHeight};
	}
	.swiper-wrapper {
		transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}
`;

const SwiperInner = styled.div<{ bgColor: string }>`
	width: 100%;
	height: ${({ theme: { fullHeight } }) => fullHeight};
	background-color: ${({ bgColor }) => bgColor};
`;

const Home = () => {
	return (
		<Container>
			<h2 className="blind">본문 &#40;K-MAS home&#41; </h2>
			<Swiper
				navigation={false}
				slidesPerView={1}
				spaceBetween={0}
				direction="vertical"
				mousewheel={true}
				speed={500}
				keyboard={true}
				a11y={{
					prevSlideMessage: "previousSlide",
					nextSlideMessage: "nextSlide",
				}}
			>
				<SwiperSlide>
					<SwiperInner bgColor="rgba(0,0,0,0.3)" />
				</SwiperSlide>
				<SwiperSlide>
					<SwiperInner bgColor="rgba(0,0,0,0.7)" />
				</SwiperSlide>
			</Swiper>
		</Container>
	);
};

export default Home;
