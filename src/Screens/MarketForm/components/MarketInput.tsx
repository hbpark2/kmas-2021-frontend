import { useFormContext } from "react-hook-form";
import styled from "styled-components";

export const Label = styled.label`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 30px 0;
	font-size: 2.2rem;

	h4 {
		width: 150px;
	}
	input {
		width: 580px;
		height: 60px;
		border-radius: 10px;
		font-size: 2rem;
		text-indent: 20px;
		border: 1px solid ${({ theme: { gray } }) => gray};
		&:focus {
			border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
			outline: none;
		}
	}
`;

const MarketInput: React.FC<IMarketInputProps> = ({ name, text, type, placeholder, errors }) => {
	const { register } = useFormContext();

	return (
		<>
			<Label htmlFor={name}>
				<h4>{text}</h4>
				<input
					type={type}
					id={name}
					{...register(name)}
					placeholder={placeholder}
					autoComplete="on"
				/>
			</Label>
			{errors[name] && <p>{errors[name].message}</p>}
		</>
	);
};

export interface IMarketInputProps {
	name: string;
	text: string;
	type?: string;
	placeholder?: string;
	errors: {
		[x: string]: any;
		[x: number]: any;
	};
}

export default MarketInput;
