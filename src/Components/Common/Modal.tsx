import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../Context/ContextStore";

const Container = styled.div<{ width?: string; height?: string }>`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${(props) => (props.width ? props.width : "50vw")};
	max-width: 800px;
	height: ${(props) => (props.height ? props.height : "60vh")};
	display: flex;
	justify-content: center;
	align-items: flex-start;
	background-color: #fff;
	z-index: 200;
	overflow-y: scroll;
	border-radius: 20px;
	padding: 20px 0;
	&::-webkit-scrollbar {
		display: none;
	}

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		width: 300px;
	}
`;

const SecondContainer = styled(Container)<{ secondWidth?: string; secondHeight?: string }>`
	width: ${(props) => (props.secondWidth ? props.secondWidth : "40vw")};
	height: ${(props) => (props.secondHeight ? props.secondHeight : "50vh")};
	z-index: 220;
	overflow: unset;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		width: 250px;
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

const SecondLayer = styled(Layer)`
	z-index: 210;
`;

interface ModalProps {
	width?: string;
	height?: string;
	secondWidth?: string;
	secondHeight?: string;
	children: React.ReactChild;
	secondChildren?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ width, height, children, secondChildren }) => {
	const { setModalOpen, secondModalOpen, setSecondModalOpen } = useContext(CurrentContext);
	console.log(width);

	return (
		<>
			<Container width={width} height={height} aria-hidden={secondModalOpen}>
				{children}
			</Container>
			<Layer
				aria-hidden={secondModalOpen}
				onClick={() => {
					setModalOpen(false);
				}}
			/>

			{secondModalOpen && (
				<>
					<SecondContainer>{secondChildren}</SecondContainer>
					<SecondLayer
						onClick={() => {
							setSecondModalOpen(false);
						}}
					/>
				</>
			)}
		</>
	);
};

export default Modal;
