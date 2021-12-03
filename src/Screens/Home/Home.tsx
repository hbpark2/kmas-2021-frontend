import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
	Container,
	KeyVisualWrap,
	KeyVisual,
	SnowSection,
	CardWrap,
	Card,
	BannerWrap,
} from "./styles";

import Utils from "../../Utils/Utils";
import SwiperSection from "./components/SwiperSection";

SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]);

const Home = () => {
	const isMobile = Utils.isMobile();

	const goToLink = (url: string) => {
		window.open(url);
	};

	return (
		<Container>
			<h2 className="blind">K-MAS 메인페이지</h2>

			<KeyVisualWrap>
				<h3 className="blind">K-MAS 키비주얼</h3>

				<KeyVisual
					src={
						isMobile
							? "https://thegn.speedgabia.com/kmas-2021/main/mo-main.png"
							: "https://thegn.speedgabia.com/kmas-2021/main/main.png"
					}
					alt="키비주얼"
				/>
			</KeyVisualWrap>
			<SnowSection>
				<CardWrap>
					<h3 className="blind">K-MAS 행사정보</h3>
					{isMobile ? (
						<Card src="https://thegn.speedgabia.com/kmas-2021/main/mo-card.png" alt="card" />
					) : (
						<Card src="https://thegn.speedgabia.com/kmas-2021/main/main-card.png" alt="card" />
					)}
				</CardWrap>

				<BannerWrap>
					<h3 className="blind">K-MAS 행사배너</h3>

					<button onClick={() => goToLink("https://sbdcmarket.co.kr/")}>
						<img
							src="https://thegn.speedgabia.com/kmas-2021/main/pc-wish-banner.png"
							alt="WishBanner"
						/>
					</button>

					<button onClick={() => alert("준비중입니다")}>
						<img
							src="https://thegn.speedgabia.com/kmas-2021/main/pc-vr-banner.png"
							alt="VRBanner"
						/>
					</button>
				</BannerWrap>
				<SwiperSection />
			</SnowSection>
		</Container>
	);
};

export default Home;
