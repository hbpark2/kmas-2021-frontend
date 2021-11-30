import { useFormContext } from "react-hook-form";
import { Label } from "./MarketInput";

const MarketUpdatePassword: React.FC<IMarketUpdatePasswordProps> = ({
  name,
  type,
  errors,
}) => {
  const { register } = useFormContext();

  return (
    <>
      <Label htmlFor={name}>
        <h4>현재 비밀번호</h4>
        <input
          type={type}
          id="original_password"
          {...register("original_password")}
          placeholder="현재 비밀번호"
          autoComplete="on"
        />
      </Label>
      {errors["original_password"] && (
        <p>{errors["original_password"].message}</p>
      )}
      <Label htmlFor={name}>
        <h4>변경 비밀번호</h4>
        <input
          type={type}
          id={name}
          {...register(name)}
          placeholder="비밀번호 변경시 입력해주세요"
          autoComplete="on"
        />
      </Label>
      {errors[name] && <p>{errors[name].message}</p>}
    </>
  );
};

interface IMarketUpdatePasswordProps {
  name: string;
  type?: string;
  errors: {
    [x: string]: any;
    [x: number]: any;
  };
}

export default MarketUpdatePassword;
