import { useContext } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../../../../Context/ContextStore";
import Utils from "../../../../../Utils/Utils";
import {
  Container,
  ButtonWrap,
  RequestButton,
  RequestHeader,
  CancelTitle,
  CancelDescription,
  CancelRequestIcon,
  CancelInner,
} from "./styles";

interface QuizCancelProp {
  secondModalType?: string;
}

const QuizCancel: React.FC<QuizCancelProp> = ({ secondModalType }) => {
  const isMobile = Utils.isMobile();
  const { setModalOpen, setSecondModalOpen } = useContext(CurrentContext);

  return (
    <Container>
      <RequestHeader>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-cancel-header.png"
              : "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-request-header.png"
          }
          alt="이벤트 참가 신청 취소"
        />
      </RequestHeader>
      <CancelInner>
        <CancelRequestIcon>
          <img
            src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-request-icon.png"
            alt="신청아이콘"
          />
        </CancelRequestIcon>
        {secondModalType === "cancel" ? (
          <>
            <CancelTitle>
              <img
                src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-cancel-title.png"
                alt="참여를 취소하시겠습니까?"
              />
              {/* 이벤트 참여를 <br />
              취소하시겠습니까? */}
            </CancelTitle>
            <CancelDescription>
              {/* 확인 버튼 클릭 시 기존에 작성된 내용이 모두 삭제되며 <br />
              다시 처음부터 이벤트 참여 하셔야 합니다. <br />
              취소 버튼을 클릭하시면 작성 중 페이지로 돌아갑니다.
              <br /> */}
              <img
                src={
                  isMobile
                    ? "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-cancel-description-mo.png"
                    : "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-cancel-description.png"
                }
                alt="참여취소 설명 글"
              />
            </CancelDescription>
          </>
        ) : (
          <>
            <CancelTitle>
              <img
                src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-success-title.png"
                alt="참여 감사합니다"
              />
            </CancelTitle>
            <CancelDescription>
              <img
                src={
                  isMobile
                    ? "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-success-description-mo.png"
                    : "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-success-description.png"
                }
                alt="당첨자발표 설명 글"
              />
            </CancelDescription>
          </>
        )}

        <ButtonWrap>
          <RequestButton
            type="button"
            value="확인"
            onClick={() => {
              setSecondModalOpen(false);
              setModalOpen(false);
            }}
          />
          <RequestButton
            type="button"
            value="취소"
            onClick={() => setSecondModalOpen(false)}
          />
        </ButtonWrap>
      </CancelInner>
    </Container>
  );
};

export default QuizCancel;
