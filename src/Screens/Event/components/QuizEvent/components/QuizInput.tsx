import { useFormContext } from "react-hook-form";
import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin: 20px auto 10px;
  font-size: 2.2rem;

  input {
    width: 100%;
    height: 45px;
    max-width: 710px;
    border-radius: 10px;
    font-size: 1.6rem;
    text-indent: 20px;
    border: 1px solid ${({ theme: { gray } }) => gray};
    word-wrap: break-word;
    word-break: break-all;

    &:focus {
      border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
      outline: none;
    }
  }

  h4 {
    margin-bottom: 13px;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    display: block;
    margin: 30px 0 10px;
    input {
      width: 100%;
      height: 45px;
      text-indent: 5px;
      &::placeholder {
        font-size: 12.5px;
        letter-spacing: -0.5px;
      }
    }
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
  //
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
