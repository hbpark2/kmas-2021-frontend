import { useFormContext } from "react-hook-form";

const MarketInput: React.FC<IMarketInputProps> = ({ name, text, type, placeholder, error }) => {
	const { register } = useFormContext();

	return (
		<label htmlFor={name}>
			<span>{text}</span>
			<input
				type={type}
				id={name}
				{...register(name)}
				placeholder={placeholder}
				autoComplete="on"
			/>
			{error && <p>{error}</p>}
		</label>
	);
};

interface IMarketInputProps {
	name: string;
	text: string;
	type?: string;
	placeholder?: string;
	error: string | null;
}

export default MarketInput;
