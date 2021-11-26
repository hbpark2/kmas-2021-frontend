import { useFormContext } from "react-hook-form";

const MarketInput: React.FC<IMarketInputProps> = ({
  name,
  text,
  type,
  placeholder,
  errors,
}) => {
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
      {errors[name] && <p>{errors[name].message}</p>}
    </label>
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
