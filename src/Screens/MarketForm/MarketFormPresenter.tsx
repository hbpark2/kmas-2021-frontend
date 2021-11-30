import { MouseEventHandler } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import styled from "styled-components";
import AddressInput from "./components/AddressInput";
import MarketInput, { Label } from "./components/MarketInput";
import MarketUpdatePassword from "./components/MarketUpdatePassword";
import { categoryArr, inputArr, MarketFormValues } from "./marketType";
import { RequestButton } from "../Market/Market";

const Container = styled.main`
	button {
		background: transparent;
	}
`;

const MarketHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url("https://thegn.speedgabia.com/kmas-2021/market/market-header-bg.png") no-repeat;
	background-size: cover;
	overflow: hidden;

	img {
		width: 70%;
		max-width: 800px;
		transform: translateY(12px);
	}
`;

const Form = styled.form`
	width: 60%;
	max-width: 750px;
	margin: 120px auto;

	input {
		box-sizing: border-box;
		margin-bottom: 5px;
		s &::placeholder {
			color: ${({ theme: { gray } }) => gray};
		}
	}
	span {
		display: block;
		margin: 10px auto;
	}
	p {
		color: #f00;
	}
`;

const SelectBox = styled.select`
	display: block;
	width: 580px;
	height: 60px;
	padding: 10px;
	font-size: 2rem;
	border-radius: 15px;
	text-align: center;
	appearance: none;
	background: url("https://thegn.speedgabia.com/kmas-2021/market/select-arrow.png") no-repeat right
		9px center;
	border: 1px solid ${({ theme: { gray } }) => gray};

	&:focus {
		border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
		outline: none;
	}
`;

const UploadButton = styled.div`
	width: 580px;
	border: 1px solid ${({ theme: { gray } }) => gray};
	padding: 70px 0;
	display: block;
	background: none;
	cursor: pointer;
	border-radius: 15px;
	img {
		display: block;
		margin: 0 auto;
	}
`;

const UploadWrap = styled(Label)`
	display: flex;
	align-items: flex-start;
	margin-bottom: 100px;
	h4 {
		margin-top: 10px;
	}
`;

const RequestBtn = styled(RequestButton)`
	display: block;
	width: 100%;
	img {
		width: 100%;
	}
`;

const MarketFormPresenter: React.FC<IMarketFormPresenterProps> = ({
	pageMode,
	preview,
	onSubmit,
	onFileClear,
	onFileChange,
	onPostOpen,
	onMarketDelete,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useFormContext();

	return (
		<Container>
			<h2 className="blind">참여업체 신청하기</h2>
			<MarketHeader>
				<img
					src="https://thegn.speedgabia.com/kmas-2021/market/request-header.png"
					alt="참여업체 신청하기 헤더이미지"
				/>
			</MarketHeader>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Label>
					<h4>카테고리</h4>
					<SelectBox {...register("category")}>
						{categoryArr.map((item, index) => (
							<option key={`categoryOption${index}`} value={item.value}>
								{item.text}
							</option>
						))}
					</SelectBox>
				</Label>
				{errors["category"] && <p>{errors["category"].message}</p>}
				{inputArr.map((item, index) => {
					if (item.text === "주소") {
						return <AddressInput onPostOpen={onPostOpen} key={`label${index}`} />;
					} else if (pageMode !== "C" && item.name === "password") {
						return (
							<MarketUpdatePassword
								key={`label${index}`}
								name={item.name}
								type={item.type}
								errors={errors}
							/>
						);
					} else {
						return (
							<MarketInput
								key={`label${index}`}
								text={item.text}
								name={item.name}
								type={item.type}
								placeholder={item.placeholder}
								errors={errors}
							/>
						);
					}
				})}
				{preview && (
					<div>
						<img src={preview} alt="preview" />
						<div>
							<button type="button" onClick={onFileClear}>
								파일삭제
							</button>
						</div>
					</div>
				)}
				<UploadWrap htmlFor="image">
					<h4>사진 업로드</h4>
					<UploadButton>
						<img
							src="https://thegn.speedgabia.com/kmas-2021/market/upload-image.png"
							alt="사진업로드 버튼"
						/>
					</UploadButton>
					<input
						type="file"
						id="image"
						accept=" .jpg, .png"
						style={{ display: "none" }}
						{...register("image", {
							onChange: onFileChange,
						})}
					/>
					{errors && errors.image && <p>{errors.image?.message}</p>}
				</UploadWrap>
				{pageMode === "C" && (
					<RequestBtn type="submit">
						<img
							src="https://thegn.speedgabia.com/kmas-2021/market/market-request-btn.png"
							alt="신청하기버튼"
						/>
					</RequestBtn>
				)}
				{pageMode !== "C" && (
					<>
						<input type="submit" value="수정하기" />
						<input type="button" value="삭제하기" onClick={onMarketDelete} />
					</>
				)}
			</Form>
		</Container>
	);
};

interface IMarketFormPresenterProps {
	pageMode: string;
	preview: string | null;
	onSubmit: SubmitHandler<MarketFormValues>;
	onFileClear: MouseEventHandler;
	onFileChange: MouseEventHandler;
	onPostOpen: MouseEventHandler;
	onMarketDelete: MouseEventHandler;
}

export default MarketFormPresenter;
