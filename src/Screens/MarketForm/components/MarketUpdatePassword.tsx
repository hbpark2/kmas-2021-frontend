import { useFormContext } from "react-hook-form";

const MarketUpdatePassword: React.FC<IMarketUpdatePasswordProps> = ({
  name,
  type,
  errors,
}) => {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={"original_password"}>
        <span>현재 비밀번호</span>
        <input
          type={type}
          id="original_password"
          {...register("original_password")}
          placeholder={"현재 비밀번호"}
          autoComplete="on"
        />
        {errors["original_password"] && (
          <p>{errors["original_password"].message}</p>
        )}
      </label>
      <label htmlFor={name}>
        <span>변경 비밀번호</span>
        <input
          type={type}
          id={name}
          {...register(name, { required: false })}
          placeholder={"변경 비밀번호"}
          autoComplete="on"
        />
        {errors[name] && <p>{errors[name].message}</p>}
      </label>
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
