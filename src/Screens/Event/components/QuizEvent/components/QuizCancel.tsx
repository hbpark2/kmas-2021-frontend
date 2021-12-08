import { useContext } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../../../../Context/ContextStore";
import { ButtonWrap, DeleteButton, SuccessButton } from "./styles";

const Container = styled.div`
  width: 100%;
`;

const QuizCancel = () => {
  const { setModalOpen, setSecondModalOpen } = useContext(CurrentContext);

  return (
    <Container>
      <div>
        <span>이벤트 참여를</span>
        <br />
        <span>취소하시겠습니까?</span>
      </div>
      <div>
        <span>확인 버튼 클릭 시 기존에 작성된 내용이 모두 삭제되며</span>
        <br />
        <span>다시 처음부터 이벤트 참여 하셔야 합니다.</span>
        <br />
        <span>취소 버튼을 클릭 하시면 작성 중 페이지로 돌아갑니다</span>
      </div>
      <ButtonWrap>
        <DeleteButton
          type="button"
          value="확인"
          onClick={() => {
            setSecondModalOpen(false);
            setModalOpen(false);
          }}
        />
        <SuccessButton
          type="button"
          value="취소"
          onClick={() => setSecondModalOpen(false)}
        />
      </ButtonWrap>
    </Container>
  );
};

export default QuizCancel;
