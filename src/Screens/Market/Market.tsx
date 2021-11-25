import { SubmitHandler, useForm } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";

import { yupResolver } from "@hookform/resolvers/yup";

import styled from "styled-components";
import Modal from "../../Components/Common/Modal";
import { useState } from "react";
import { categoryArr, FormValues, inputArr, schema } from "./marketType";
import Utils from "../../Utils/Utils";
import { getBase64Format } from "../../Utils/base64";

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
		setValue,
		trigger,
	} = useForm<FormValues | any>({
		// mode: "onChange",
		resolver: yupResolver(schema),
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

	const onPostComplete = (data: any) => {
		const { zonecode, jibunAddress, autoJibunAddress, address, roadAddress } = data;
		setValue("zonecode", zonecode);
		setValue("jibun_address", jibunAddress || autoJibunAddress);
		setValue("road_address", address || roadAddress);
		trigger("road_address");
		setIsPostOpen(false);
	};

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
					if (item.text === "주소") {
						return (
							<label htmlFor="detail_address" key={`label${index}`}>
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
									<button
										onClick={(e) => {
											e.preventDefault();
											setIsPostOpen(true);
										}}
										type="button"
									>
										우편번호 찾기
									</button>
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
						);
					} else {
						return (
							<label htmlFor={item.name} key={`label${index}`}>
								<span>{item.text}</span>
								<input
									type={item.type}
									id={item.name}
									{...register(item.name)}
									placeholder={item.placeholder}
								/>

								{(item.name === "name" && errors.name && <p>{`${errors.name.message}`}</p>) ||
									(item.name === "hompage_link" && errors.hompage_link && (
										<p>{`${errors.hompage_link.message}`}</p>
									)) ||
									(item.name && "phone_number" && errors.phone_number && (
										<p>{`${errors.phone_number.message}`}</p>
									)) ||
									(item.name && "password" && errors.password && (
										<p>{`${errors.password.message}`}</p>
									)) ||
									(item.name && "crn" && errors.crn && <p>{`${errors.crn.message}`}</p>) ||
									(item.name && "items" && errors.items && <p>{`${errors.items.message}`}</p>) ||
									(item.name && "promotion" && errors.promotion && (
										<p>{`${errors.promotion.message}`}</p>
									)) ||
									(item.name && "exhibition_link" && errors.exhibition_link && (
										<p>{`${errors.exhibition_link.message}`}</p>
									))}
							</label>
						);
					}
				})}

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

				<input type="submit"></input>
			</Form>
		</Container>
	);
};

export default Market;
