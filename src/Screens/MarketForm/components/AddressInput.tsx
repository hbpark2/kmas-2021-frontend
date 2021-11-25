import { useFormContext } from "react-hook-form";

const AddressInput: React.FC<AddressInpuProps> = ({ onPostOpen }) => {
	const { register } = useFormContext();

	return (
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
				/>
				<button onClick={(e) => onPostOpen(e)} type="button">
					우편번호 찾기
				</button>
			</div>
			<div>
				<input
					type="text"
					id="jibun_address"
					readOnly={true}
					{...register("jibun_address", {
						required: true,
						validate: (value?: string) =>
							value && value.length < 4 ? "정확히 입력해주세요." : true,
					})}
				/>
			</div>
			<div>
				<input
					type="text"
					id="road_address"
					readOnly={true}
					{...register("road_address", {
						required: true,
						validate: (value?: string) =>
							value && value.length < 4 ? "정확히 입력해주세요." : true,
					})}
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
};

interface AddressInpuProps {
	onPostOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default AddressInput;
