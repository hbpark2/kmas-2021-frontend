import { useContext, useState } from "react";
import styled from "styled-components";
import Modal from "../../../../Components/Common/Modal";
import { CurrentContext } from "../../../../Context/ContextStore";
import Utils from "../../../../Utils/Utils";
import Event from "../../Event";
import QuizCancel from "./components/QuizCancel";
import QuizForm from "./components/QuizForm";

const Container = styled.div`
  img {
    display: block;
  }
`;
const Top = styled.div`
  img {
    width: 100%;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: -50px;
  }
`;
const Bottom = styled.div`
  background-color: #a82a38;
  background-image: url("https://thegn.speedgabia.com/kmas-2021/event/event-bg-snow.png");
  background-size: cover;
  padding-bottom: 200px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 50px;
    background-image: none;
  }
`;
const BottomHedaerWrap = styled.div`
  padding-top: 160px;
  img {
    display: block;
    margin: 0 auto;
    width: 80%;
    max-width: 1155px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 40px;
  }
`;

const BottomInner = styled.div`
  background-color: #f4ead5;
  width: 94%;
  max-width: 1320px;
  margin: 0 auto;
  border-radius: 25px;
  padding-top: 100px;
  overflow: hidden;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 40px;
    border-radius: 15px;
  }
`;

const VideoWrap = styled.div`
  width: 1140px;
  height: 595px;
  background-color: #ccc;
  margin: 0 auto;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 92%;
    height: 200px;
  }
`;

const ShareButton = styled.button`
  display: block;
  margin: 45px auto 75px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 45%;
    margin: 25px auto 35px;
    img {
      width: 100%;
    }
  }
`;

const QuizWrap = styled.div`
  background-color: #d1b2a3;
  img {
    width: 100%;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 40px 0 20px;
  }
`;

const GiftWrap = styled.div`
  position: relative;
  padding-top: 100px;
  padding: 100px 0 20px;
  img {
    display: block;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 35px 0 0;
  }
`;

const JoinButton = styled.button`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);

  img {
    display: block;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    display: block;
    position: static;
    margin: 25px auto 35px;
    transform: none;
    width: 60%;
  }
`;

const NoteWrap = styled.div`
  padding: 60px 150px;
  background-color: #d1b2a3;
  img {
    width: 100%;
    max-width: 970px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 20px 20px 30px;
  }
`;

const QuizEvent = () => {
  const isMobile = Utils.isMobile();

  const { modalOpen, setModalOpen } = useContext(CurrentContext);

  const [seconModalType, setSecondModalType] = useState("cancel");

  const onJoinButtonClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Container>
        <Top>
          <img
            src={
              isMobile
                ? "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-1-top-mo.png"
                : "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-1-top.png"
            }
            alt=""
          />
        </Top>
        <Bottom>
          <BottomHedaerWrap>
            <img
              src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-bottom-header.png"
              alt="악당듀오의 속사정"
            />
          </BottomHedaerWrap>
          <BottomInner>
            <VideoWrap />

            <ShareButton type="button">
              <img
                src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-share-button.png"
                alt="공유하기"
              />
            </ShareButton>

            <QuizWrap>
              <img
                src={
                  isMobile
                    ? "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-quiz-mo.png"
                    : "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-quiz.png"
                }
                alt="퀴즈"
              />
            </QuizWrap>

            <GiftWrap>
              <img
                src={
                  isMobile
                    ? "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-quiz-gift-mo.png"
                    : "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-quiz-gift.png"
                }
                alt="경품 안내"
              />
              <JoinButton type="button" onClick={onJoinButtonClick}>
                <img
                  src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-join-button.png"
                  alt="이벤트 참여하기"
                />
              </JoinButton>
            </GiftWrap>
            <NoteWrap>
              <img
                src={
                  isMobile
                    ? "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-note-mo.png"
                    : "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-note.png"
                }
                alt="유의사항"
              />
            </NoteWrap>
          </BottomInner>
        </Bottom>
      </Container>

      {modalOpen && (
        <Modal
          secondChildren={<QuizCancel secondModalType={seconModalType} />}
          width={isMobile ? "90%" : "80%"}
          height={isMobile ? "400px" : "80%"}
          secondWidth={isMobile ? "90%" : "80%"}
          secondHeight={isMobile ? "400px" : "80%"}
          isQuiz={true}
        >
          <QuizForm
            seconModalType={seconModalType}
            setSecondModalType={setSecondModalType}
          />
        </Modal>
      )}
    </>
  );
};

export default QuizEvent;
