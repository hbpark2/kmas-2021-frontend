import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	margin: 0;
	padding: 0;
	padding-bottom: 50px;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		padding-bottom: 0;
	}
`;

export const KeyVisualWrap = styled.div`
	width: 100%;
`;

export const KeyVisual = styled.img`
	display: block;
	width: 100%;
	max-width: 1710px;
	margin: 0 auto;
`;

export const SnowSection = styled.div`
	background: url("https://thegn.speedgabia.com/kmas-2021/main/main-snowbg.png") no-repeat;
	background-size: contain;
	background-position: center center;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		background-size: contain;
	}
`;

export const CardWrap = styled.div`
	margin: 0px auto 130px;
	overflow: hidden;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		margin: 0px auto 30px;
		margin-top: -30px;
	}
`;

export const Card = styled.img`
	display: block;
	margin: 0 auto;
	width: 100%;
	max-width: 1420px;
	transform: translateX(10px);
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		transform: translateX(0);
	}
`;

export const BannerWrap = styled.div`
	margin: 0px auto 130px;
	button {
		display: block;
		margin: 0 auto;
	}
	img {
		display: block;
		margin: 30px auto;
		width: 100%;
		max-width: 1360px;
	}
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		margin-bottom: 50px;
		img {
			margin: 10px auto;
		}
	}
`;
