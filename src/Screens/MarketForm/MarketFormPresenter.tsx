import { MouseEventHandler } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import styled from "styled-components";
import AddressInput from "./components/AddressInput";
import MarketInput, { Label } from "./components/MarketInput";
import MarketUpdatePassword from "./components/MarketUpdatePassword";
import { categoryArr, inputArr, MarketFormValues } from "./marketType";
import { RequestButton } from "../Market/Market";
import Utils from "../../Utils/Utils";

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
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		height: auto;
		img {
			width: 100%;
			height: auto;
			transform: translateY(7px);
		}
	}
`;

const Form = styled.form`
	width: 60%;
	max-width: 750px;
	margin: 120px auto;

	h4 {
		font-family: ${({ theme: { accentFont } }) => accentFont};
	}

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

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		margin: 60px auto;
		width: 90%;
		input {
			width: 100%;
		}
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
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		width: 100%;
	}
`;

const UploadButton = styled.div<{ preview?: string | null }>`
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

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		display: block;
		width: 100%;
		padding: ${({ preview }) => (preview ? "0" : "35px 0")};
		border: ${({ preview }) => preview && "none"};
	}
`;

const UploadWrap = styled(Label)`
	display: flex;
	align-items: flex-start;
	margin-bottom: 50px;
	h4 {
		margin-top: 10px;
	}
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		display: block;
		margin-bottom: 20px;
		h4 {
			margin-bottom: 15px;
		}
	}
`;

const MarketImage = styled.img`
	width: 100%;
	max-width: 460px;
`;

const RequestBtn = styled(RequestButton)`
	display: block;
	width: 100%;
	img {
		width: 100%;
	}
`;

const UploadBox = styled.div``;

const ImageDeleteButton = styled.button`
	display: block;
	width: 50%;
	max-width: 400px;
	height: 60px;
	margin: 20px auto;
	font-family: ${({ theme: { defaultFont } }) => defaultFont};
	font-size: 1.2em;
	color: ${({ theme: { headerDefault } }) => headerDefault};
	border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
	border-radius: 15px;
	background-color: ${({ theme: { tableHeader } }) => tableHeader};
`;

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
					src={
						Utils.isMobile()
							? "https://thegn.speedgabia.com/kmas-2021/market/mo-market-request-header.png"
							: "https://thegn.speedgabia.com/kmas-2021/market/market-request-header.png"
					}
					alt=""
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
					} else if (item.text === "이미지") {
						return (
							<UploadWrap htmlFor="image" key={`label${index}`}>
								<h4>사진 업로드</h4>
								<UploadBox>
									<UploadButton preview={preview}>
										{preview ? (
											<MarketImage src={preview} alt="preview" />
										) : (
											<img
												src="https://thegn.speedgabia.com/kmas-2021/market/upload-image.png"
												alt="사진업로드 버튼"
											/>
										)}
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
									{preview && (
										<ImageDeleteButton type="button" onClick={onFileClear}>
											이미지 삭제
										</ImageDeleteButton>
									)}
								</UploadBox>
							</UploadWrap>
						);
					} else if (pageMode !== "C" && item.text === "비밀번호") {
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

				{pageMode === "C" && (
					<RequestBtn type="submit">
						<img
							src="https://thegn.speedgabia.com/kmas-2021/market/market-request-btn.png"
							alt="신청하기버튼"
						/>
					</RequestBtn>
				)}
				{pageMode !== "C" && (
					<ButtonWrap>
						<DeleteButton type="button" value="삭제하기" onClick={onMarketDelete} />
						<SuccessButton type="submit" value="수정하기" />
					</ButtonWrap>
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
