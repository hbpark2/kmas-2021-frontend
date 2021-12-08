import { useContext } from "react";
import styled from "styled-components";
import Modal from "../../../../Components/Common/Modal";
import { CurrentContext } from "../../../../Context/ContextStore";
import Utils from "../../../../Utils/Utils";
import Event from "../../Event";
import QuizCancel from "./components/QuizCancel";
import QuizForm from "./components/QuizForm";

const Container = styled.div``;

const QuizEvent = () => {
  const isMobile = Utils.isMobile();

  const { modalOpen, setModalOpen } = useContext(CurrentContext);
  const onJoinButtonClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Event>
        <Container>
          QuizEvent
          <div>
            <button onClick={onJoinButtonClick}>이벤트 참여하기</button>
          </div>
        </Container>
      </Event>
      {modalOpen && (
        <Modal
          secondChildren={<QuizCancel />}
          width={isMobile ? "90%" : "500px"}
          secondWidth="500px"
          secondHeight="350px"
        >
          <QuizForm />
        </Modal>
      )}
    </>
  );
};

export default QuizEvent;
