import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../Context/ContextStore";

const Container = styled.div<{
  width?: string;
  height?: string;
  center?: boolean;
  isDownload?: boolean;
  isConcert?: boolean;
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.width ? props.width : "50vw")};
  max-width: 1000px;
  height: ${(props) => (props.height ? props.height : "60vh")};
  display: flex;
  justify-content: center;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  background-color: #fff;
  z-index: 200;
  overflow-y: scroll;
  border-radius: 25px;
  padding: ${({ isDownload }) => (isDownload ? "0" : "20px 0")};
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.2), -3px -3px 12px rgba(0, 0, 0, 0.2);
  background: ${({ isConcert }) =>
    isConcert &&
    'url("https://thegn.speedgabia.com/kmas-2021/news/concert-bg.png")'};

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
    max-height: ${(props) => (props.height ? props.height : "800px")};
    /* max-height: ${(props) =>
      props.isDownload ? "760px" : props.height ? props.height : "800px"}; */
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: ${(props) => (props.width ? props.width : "300px")};
  }
`;

const SecondContainer = styled(Container)<{
  secondWidth?: string;
  secondHeight?: string;
  isQuiz?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isQuiz }) => (isQuiz ? "flex-start" : "center")};
  align-items: center;
  width: ${(props) => (props.secondWidth ? props.secondWidth : "40vw")};
  height: ${(props) => (props.secondHeight ? props.secondHeight : "50vh")};
  z-index: 220;
  overflow: unset;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.2), -3px -3px 12px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  padding: ${({ isQuiz }) => isQuiz && "22px 0"};

  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
    max-height: ${(props) =>
      props.secondHeight ? props.secondHeight : "800px"};
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: ${(props) => (props.secondWidth ? props.secondWidth : "250px")};
    min-height: ${(props) =>
      props.secondHeight ? props.secondHeight : "200px"};
  }
`;

const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 199;
`;

const SecondLayer = styled(Layer)`
  z-index: 210;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  display: block;
  visibility: hidden;
`;

interface ModalProps {
  width?: string;
  height?: string;
  secondWidth?: string;
  secondHeight?: string;
  center?: boolean;
  children: React.ReactChild;
  secondChildren?: React.ReactNode;
  isQuiz?: boolean;
  isDownload?: boolean;
  isConcert?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  width,
  height,
  children,
  secondChildren,
  secondWidth,
  secondHeight,
  center,
  isQuiz,
  isDownload,
  isConcert,
}) => {
  const { setModalOpen, secondModalOpen, setSecondModalOpen } =
    useContext(CurrentContext);

  return (
    <>
      <Container
        width={width}
        height={height}
        aria-hidden={secondModalOpen}
        center={center}
        isDownload={isDownload}
        isConcert={isConcert}
        role="dialog"
      >
        {children}
        <CloseButton
          aria-hidden={secondModalOpen}
          tabIndex={5}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          닫기
        </CloseButton>
      </Container>
      <Layer
        aria-hidden={secondModalOpen}
        onClick={() => {
          setModalOpen(false);
        }}
      />

      {secondModalOpen && (
        <>
          <SecondContainer
            secondWidth={secondWidth}
            secondHeight={secondHeight}
            isQuiz={isQuiz}
            role="dialog"
          >
            {secondChildren}
            <CloseButton
              aria-hidden={secondModalOpen}
              tabIndex={5}
              onClick={() => {
                setSecondModalOpen(false);
              }}
            >
              닫기
            </CloseButton>
          </SecondContainer>
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
