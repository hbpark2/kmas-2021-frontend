import { useContext } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../../Context/ContextStore";

const ButtonWrap = styled.div`
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

const SuccessButton = styled.input`
  color: ${({ theme: { headerDefault } }) => headerDefault};
  border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
  background-color: ${({ theme: { tableHeader } }) => tableHeader};
`;

const DeleteButton = styled.input`
  color: ${({ theme: { headerActive } }) => headerActive};
  border: 2px solid ${({ theme: { headerActive } }) => headerActive};
  background-color: rgba(255, 50, 50, 0.2);
`;

const FileDownload = () => {
  const { setModalOpen } = useContext(CurrentContext);

  const onFileDownload = () => {
    window.location.href =
      "https://kmas2021.s3.ap-northeast-2.amazonaws.com/media/2021kmas+%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%A7%88%EC%BC%93+%ED%99%8D%EB%B3%B4%EB%AC%BC.zip";
  };

  return (
    <div>
      <p>
        3G/LTE 등의 환경에서는
        <br />
        데이터 요금이 발생할 수 있습니다.(515MB)
      </p>
      <ButtonWrap>
        <DeleteButton
          type="button"
          value="취소하기"
          onClick={() => setModalOpen(false)}
        />
        <SuccessButton
          type="button"
          value="수정하기"
          onClick={onFileDownload}
        />
      </ButtonWrap>
    </div>
  );
};

export default FileDownload;
