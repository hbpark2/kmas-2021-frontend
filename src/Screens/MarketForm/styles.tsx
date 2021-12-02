import styled from "styled-components";
import { RequestButton } from "../Market/styles";

import { Label } from "./components/MarketInput";

export const Container = styled.main`
	button {
		background: transparent;
	}
`;

export const MarketHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url("https://thegn.speedgabia.com/kmas-2021/market/market-header-bg.png") no-repeat;
	background-size: cover;
	overflow: hidden;

	img {
		width: 70%;
		max-width: 800px;
		transform: translateY(12px);
	}
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		height: auto;
		img {
			width: 100%;
			height: auto;
			transform: translateY(7px);
		}
	}
`;

export const Form = styled.form`
	width: 60%;
	max-width: 750px;
	margin: 120px auto;

	h4 {
		font-family: ${({ theme: { accentFont } }) => accentFont};
	}

	input {
		box-sizing: border-box;
		margin-bottom: 5px;
		s &::placeholder {
			color: ${({ theme: { gray } }) => gray};
		}
	}

	span {
		display: block;
		margin: 10px auto;
	}

	p {
		color: #f00;
	}

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		margin: 60px auto;
		width: 90%;
		input {
			width: 100%;
		}
	}
`;

export const SelectBox = styled.select`
	display: block;
	width: 580px;
	height: 60px;
	padding: 10px;
	font-size: 2rem;
	border-radius: 15px;
	text-align: center;
	appearance: none;
	background: url("https://thegn.speedgabia.com/kmas-2021/market/select-arrow.png") no-repeat right
		9px center;
	border: 1px solid ${({ theme: { gray } }) => gray};
	color: #333;
	&:focus {
		border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
		outline: none;
	}
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		width: 100%;
	}
`;

export const UploadButton = styled.div<{ preview?: string | null }>`
	width: 580px;
	border: 1px solid ${({ theme: { gray } }) => gray};
	padding: 70px 0;
	display: block;
	background: none;
	cursor: pointer;
	border-radius: 15px;
	img {
		display: block;
		margin: 0 auto;
	}

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		display: block;
		width: 100%;
		padding: ${({ preview }) => (preview ? "0" : "35px 0")};
		border: ${({ preview }) => preview && "none"};
	}
`;

export const UploadWrap = styled(Label)`
	display: flex;
	align-items: flex-start;
	margin-bottom: 50px;
	h4 {
		margin-top: 10px;
	}
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		display: block;
		margin-bottom: 20px;
		h4 {
			margin-bottom: 15px;
		}
	}
`;

export const MarketImage = styled.img`
	width: 100%;
	max-width: 460px;
`;

export const RequestBtn = styled(RequestButton)`
	display: block;
	width: 100%;
	img {
		width: 100%;
	}
`;

export const UploadBox = styled.div``;

export const ImageDeleteButton = styled.button`
	display: block;
	width: 50%;
	max-width: 400px;
	height: 60px;
	margin: 20px auto;
	font-family: ${({ theme: { defaultFont } }) => defaultFont};
	font-size: 1.2em;
	color: ${({ theme: { headerDefault } }) => headerDefault};
	border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
	border-radius: 15px;
	background-color: ${({ theme: { tableHeader } }) => tableHeader};
`;

export const ButtonWrap = styled.div`
	display: flex;
	justify-content: space-between;
	input {
		display: block;
		cursor: pointer;
		width: 48%;
		padding: 20px;
		font-family: ${({ theme: { accentFont } }) => accentFont};
		font-size: 1.6em;
		border-radius: 15px;
	}
`;

export const SuccessButton = styled.input`
	color: ${({ theme: { headerDefault } }) => headerDefault};
	border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
	background-color: ${({ theme: { tableHeader } }) => tableHeader};
`;

export const DeleteButton = styled.input`
	color: ${({ theme: { headerActive } }) => headerActive};
	border: 2px solid ${({ theme: { headerActive } }) => headerActive};
	background-color: rgba(255, 50, 50, 0.2);
`;
