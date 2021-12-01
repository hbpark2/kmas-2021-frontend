import { useContext } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../../Context/ContextStore";

const Container = styled.div`
	padding: 0 15px;
	p {
		margin-bottom: 20px;
		line-height: 1.2em;
		font-size: 16px;
	}
`;

const Title = styled.h4`
	text-align: center;
	margin-bottom: 10px;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-size: 20px;
`;

const ButtonWrap = styled.div`
	display: flex;
	justify-content: space-between;
	input {
		display: block;
		cursor: pointer;
		width: 48%;
		padding: 10px;
		font-family: ${({ theme: { accentFont } }) => accentFont};
		font-size: 20px;
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

const FileDownload: React.FC<{ fileType?: string }> = ({ fileType }) => {
	const { setModalOpen } = useContext(CurrentContext);
	//
	const onFileDownload = () => {
		if (fileType === "origin") {
			window.location.href =
				"https://kmas2021.s3.ap-northeast-2.amazonaws.com/media/2021+KMAS+%E1%84%92%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A9%E1%84%86%E1%85%AE%E1%86%AF+%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%87%E1%85%A9%E1%86%AB%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF.zip";
		} else {
			window.location.href =
				"https://kmas2021.s3.ap-northeast-2.amazonaws.com/media/2021+KMAS+%E1%84%92%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A9%E1%84%86%E1%85%AE%E1%86%AF+%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5.zip";
		}
	};

	return (
		<Container>
			<Title>{fileType === "origin" ? "원본" : "포스터"} 다운로드</Title>
			<p>
				3G/LTE 등의 환경에서는
				<br />
				데이터 요금이 발생할 수 있습니다.{fileType === "origin" ? "(500MB)" : "(13MB)"}
			</p>
			<ButtonWrap>
				<DeleteButton type="button" value="취소하기" onClick={() => setModalOpen(false)} />
				<SuccessButton type="button" value="다운받기" onClick={onFileDownload} />
			</ButtonWrap>
		</Container>
	);
};

export default FileDownload;
