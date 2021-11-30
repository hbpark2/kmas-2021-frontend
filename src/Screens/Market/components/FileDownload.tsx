import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";

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
      <button onClick={() => setModalOpen(false)}>취소하기</button>
      <button onClick={onFileDownload}>다운로드</button>
    </div>
  );
};

export default FileDownload;
