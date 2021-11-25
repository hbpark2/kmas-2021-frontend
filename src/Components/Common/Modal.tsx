import React from "react";
import styled from "styled-components";

const Container = styled.div<{ width?: string; height?: string }>`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${(props) => (props.width ? props.width : "50vw")};
	height: ${(props) => (props.height ? props.height : "60vh")};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	z-index: 200;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		width: 300px;
	}
`;
const Layer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: ${({ theme: { fullHeight } }) => fullHeight};
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 199;
`;

interface ModalProps {
	width?: string;
	height?: string;
	children: React.ReactChild;
	onCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ width, height, children, onCloseModal }) => {
	return (
		<>
			<Container width={width} height={height}>
				{children}
			</Container>
			<Layer
				onClick={() => {
					onCloseModal();
				}}
			/>
		</>
	);
};

export default Modal;
