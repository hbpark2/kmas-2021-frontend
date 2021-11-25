import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const Label = styled.label`
  display: block;
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

const MarketInput: React.FC<IMarketInputProps> = ({
  name,
  text,
  type,
  placeholder,
  error,
}) => {
  const { register } = useFormContext();

  return (
    <Label htmlFor={name}>
      <span>{text}</span>
      <input
        type={type}
        id={name}
        {...register(name)}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </Label>
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
