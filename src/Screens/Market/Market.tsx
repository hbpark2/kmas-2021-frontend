import { SubmitHandler, useForm } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";

import styled from "styled-components";
import Modal from "../../Components/Common/Modal";
import { useState } from "react";
import { FormValues } from "./marketType";
import Utils from "../../Utils/Utils";
import { getBase64Format } from "../../Utils/base64";
import { getByDisplayValue } from "@testing-library/dom";

const Container = styled.main``;
const Form = styled.form`
	width: 60%;
	margin: 100px auto;

	label {
		display: block;
	}
	input {
		padding: 5px;
		margin-bottom: 5px;
	}
	span {
		display: block;
		margin: 10px auto;
	}
	p {
		color: #f00;
	}
`;

const Market = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
		setValue,
		trigger,
		control,
	} = useForm<FormValues | any>({
		// mode: "onChange",
	});

	const [isPostOpen, setIsPostOpen] = useState(false);
	const [preview, setPreview] = useState<string | null>("");

	const onPostClose = () => {
		setIsPostOpen(false);
	};

	const onFileChange = async (e: File | any) => {
		const {
			target: { files },
		} = e;

		if (files.length > 0) {
			//  파일 확장자 && 용량 체크
			const file = files[0];
			if (Utils.checkImageFile(file) && Utils.checkFileSize(file, 2)) {
				const theFile = files[0];
				const src = await getBase64Format(theFile);
				setPreview(src);
			} else {
				setValue("image", undefined);
				setPreview(null);
			}
		}

		return null;
	};

	const onFileClear = () => {
		setValue("image", undefined);
		setPreview(null);
	};

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
	};

	console.log(errors);

	const categoryArr = [
		{ text: "전체", value: 0 },
		{ text: "생활/가구/주방", value: 1 },
		{ text: "뷰티", value: 2 },
		{ text: "식품", value: 3 },
		{ text: "가전/디지털", value: 4 },
		{ text: "스포츠/레저/자동차", value: 5 },
		{ text: "패션/잡화", value: 6 },
		{ text: "문구/오피스", value: 7 },
		{ text: "출산/유아동", value: 8 },
		{ text: "기타", value: 9 },
	];

	const onPostComplete = (data: any) => {
		const { zonecode, jibunAddress, autoJibunAddress, address, roadAddress } = data;
		setValue("zonecode", zonecode);
		setValue("jibun_address", jibunAddress || autoJibunAddress);
		setValue("road_address", address || roadAddress);
		trigger("road_address");
		setIsPostOpen(false);
	};

	const inputArr = [
		{
			text: "이름",
			name: "name",
			type: "text",
			required: true,
			placeholder: "필수 입력항목입니다.",
			validate: (value?: string) => (value && value.length < 4 ? "3자 이상" : true),
		},
		{
			text: "홈페이지",
			name: "hompage_link",
			type: "text",
			required: true,
			placeholder: "필수 입력항목입니다.",
			validate: (value?: string) => (value && value.length < 4 ? "3자 이상" : true),
		},
		{
			text: "핸드폰 번호",
			name: "phone_number",
			type: "text",
			required: true,
			placeholder: "필수 입력항목입니다.",
			validate: (value?: string) => (value && value.length < 4 ? "3자 이상" : true),
		},
	];

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<select {...register("category")}>
					{categoryArr.map((item, index) => (
						<option key={`categoryOption${index}`} value={item.value}>
							{item.text}
						</option>
					))}
				</select>

				{inputArr.map((item, index) => {
					console.log(errors);

					return (
						<label htmlFor={item.name} key={`label${index}`}>
							<span>{item.text}</span>
							<input
								type={item.type}
								id={item.name}
								{...register(item.name, {
									required: true,
									validate: (value) => item.validate(value),
								})}
								placeholder={item.placeholder}
							/>

							{item.name === "name" && errors.name && <p>{`${errors.name.message}`}</p>}

							{item.name === "hompage_link" && errors.hompage_link && (
								<p>{`${errors.hompage_link.message}`}</p>
							)}

							{item.name && "phone_number" && errors.phone_number && (
								<p>{`${errors.phone_number.message}`}</p>
							)}
						</label>
					);
				})}

				{/* <label htmlFor="name">
					<span>이름</span>
					<input
						type="text"
						id="name"
						{...register("name", {
							required: true,
							validate: (value?: string) => (value && value.length < 4 ? "3자 이상" : true),
						})}
						placeholder="필수입력항목입니다."
					/>

					{errors.name && <p>{`${errors.name?.message}`}</p>}
				</label>

				<label htmlFor="hompage_link">
					<span>홈페이지</span>
					<input
						type="text"
						id="hompage_link"
						{...register("hompage_link", {
							required: true,
							validate: (value?: string) => (value && value.length < 4 ? "3자 이상" : true),
						})}
						placeholder="필수입력항목입니다."
					/>

					{errors.hompage_link && <p>{`${errors.hompage_link?.message}`}</p>}
				</label>

				<label htmlFor="phone_number">
					<span>핸드폰 번호</span>
					<input
						type="text"
						id="phone_number"
						{...register("phone_number", {
							required: true,
							validate: (value?: string) =>
								value && value.length < 4 ? "정확히 입력해주세요." : true,
						})}
						placeholder="필수입력항목입니다."
					/>
					{errors.phone_number && <p>{`${errors.phone_number?.message}`}</p>}
				</label> */}

				<label htmlFor="password">
					<span>비밀 번호</span>
					<input
						type="password"
						id="password"
						{...register("password", {
							required: true,
							validate: (value?: string) =>
								value && value.length < 4 ? "정확히 입력해주세요." : true,
						})}
						placeholder="필수입력항목입니다."
						autoComplete="on"
					/>
					{errors.password && <p>{`${errors.password?.message}`}</p>}
				</label>

				<label htmlFor="crn">
					<span>사업자 번호</span>
					<input
						type="text"
						id="crn"
						{...register("crn", {
							required: true,
							validate: (value?: string) =>
								value && value.length < 4 ? "정확히 입력해주세요." : true,
						})}
						placeholder="필수입력항목입니다."
					/>
					{errors.crn && <p>{`${errors.crn?.message}`}</p>}
				</label>

				<label htmlFor="detail_address">
					<span>주소</span>
					<div>
						<input
							type="text"
							id="zonecode"
							readOnly={true}
							{...register("zonecode", {
								required: true,
								validate: (value?: string) =>
									value && value.length < 4 ? "정확히 입력해주세요." : true,
							})}
							placeholder="필수입력항목입니다."
						/>
						<button onClick={() => setIsPostOpen(true)}>우편번호 찾기</button>
					</div>
					<div>
						<input
							type="text"
							id="jibun_address"
							{...register("jibun_address", {
								required: true,
								validate: (value?: string) =>
									value && value.length < 4 ? "정확히 입력해주세요." : true,
							})}
							placeholder="필수입력항목입니다."
						/>
					</div>
					<div>
						<input
							type="text"
							id="road_address"
							{...register("road_address", {
								required: true,
								validate: (value?: string) =>
									value && value.length < 4 ? "정확히 입력해주세요." : true,
							})}
							placeholder="필수입력항목입니다."
						/>
					</div>

					<div>
						<input
							type="text"
							id="detail_address"
							{...register("detail_address", {
								required: true,
								validate: (value?: string) =>
									value && value.length < 4 ? "정확히 입력해주세요." : true,
							})}
							placeholder="상세주소"
						/>
					</div>
				</label>

				<label htmlFor="items">
					<span>주요 판매품목</span>
					<input
						type="text"
						id="items"
						{...register("items", {
							required: true,
							validate: (value?: string) =>
								value && value.length < 4 ? "정확히 입력해주세요." : true,
						})}
						placeholder="필수입력항목입니다."
					/>
					{errors.items && <p>{`${errors.items?.message}`}</p>}
				</label>

				<label htmlFor="promotion">
					<span>프로모션 내용</span>
					<input
						type="text"
						id="promotion"
						{...register("promotion", {
							required: true,
							validate: (value?: string) =>
								value && value.length < 4 ? "정확히 입력해주세요." : true,
						})}
						placeholder="필수입력항목입니다."
					/>
					{errors.promotion && <p>{`${errors.promotion?.message}`}</p>}
				</label>

				<label htmlFor="exhibition_link">
					<span>기획전 링크</span>
					<input
						type="text"
						id="exhibition_link"
						{...register("exhibition_link", {
							required: false,
							validate: (value?: string) =>
								value && value.length < 4 ? "정확히 입력해주세요." : true,
						})}
						placeholder="필수입력항목입니다."
					/>
					{errors.exhibition_link && <p>{`${errors.exhibition_link?.message}`}</p>}
				</label>

				{preview && (
					<div>
						<img src={preview} alt="preview" />
						{/* <div>
                        <button type="button" onClick={onFilePreview}>
                          미리보기
                        </button>
                      </div> */}
						<div>
							<button type="button" onClick={onFileClear}>
								파일삭제
							</button>
						</div>
					</div>
				)}

				<label htmlFor="image">
					<span>이미지 업로드</span>
					<input
						type="file"
						id="image"
						accept=" .jpg, .png"
						style={{ display: preview ? "none" : "block" }}
						{...register("image", {
							required: false,
							onChange: onFileChange,
						})}
						placeholder="필수입력항목입니다."
					/>
					{errors.image && <p>{`${errors.image?.message}`}</p>}
				</label>

				{isPostOpen && (
					<Modal onCloseModal={onPostClose} width="600px">
						<DaumPostcode style={{ height: "100%" }} onComplete={onPostComplete} />
					</Modal>
				)}

				<button onClick={handleSubmit(onSubmit)}>제출</button>
			</Form>
		</Container>
	);
};

export default Market;
