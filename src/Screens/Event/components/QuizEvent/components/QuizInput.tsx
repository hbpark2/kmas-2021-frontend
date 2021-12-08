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
    word-wrap: break-word;
    word-break: break-all;
    &:focus {
      border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
      outline: none;
    }
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    display: block;
    h4 {
      margin-bottom: 15px;
    }
  }
`;

const QuizInput: React.FC<IQuizInputProps> = ({
  name,
  text,
  type,
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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

export interface IQuizInputProps {
  name: string;
  text: string;
  type?: string;
  placeholder?: string;
}

export default QuizInput;
