import { MouseEventHandler } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import styled from "styled-components";
import AddressInput from "./components/AddressInput";
import MarketInput from "./components/MarketInput";
import MarketUpdatePassword from "./components/MarketUpdatePassword";
import { categoryArr, inputArr, MarketFormValues } from "./marketType";

const Container = styled.main``;
const Form = styled.form`
  width: 60%;
  margin: 120px auto;

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

const MarketFormPresenter: React.FC<IMarketFormPresenterProps> = ({
  pageMode,
  preview,
  onSubmit,
  onFileClear,
  onFileChange,
  onPostOpen,
  onMarketDelete,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        카테고리
        <select {...register("category")}>
          {categoryArr.map((item, index) => (
            <option key={`categoryOption${index}`} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
        {errors["category"] && <p>{errors["category"].message}</p>}
        {inputArr.map((item, index) => {
          if (item.text === "주소") {
            return (
              <AddressInput onPostOpen={onPostOpen} key={`label${index}`} />
            );
          } else if (pageMode !== "C" && item.name === "password") {
            return (
              <MarketUpdatePassword
                key={`label${index}`}
                name={item.name}
                type={item.type}
                errors={errors}
              />
            );
          } else {
            return (
              <MarketInput
                key={`label${index}`}
                text={item.text}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                errors={errors}
              />
            );
          }
        })}
        {preview && (
          <div>
            <img src={preview} alt="preview" />
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
              onChange: onFileChange,
            })}
          />
          {errors && errors.image && <p>{errors.image?.message}</p>}
        </label>
        {pageMode === "C" && <input type="submit" value="신청하기" />}
        {pageMode !== "C" && (
          <>
            <input type="submit" value="수정하기" />
            <input type="button" value="삭제하기" onClick={onMarketDelete} />
          </>
        )}
      </Form>
    </Container>
  );
};

interface IMarketFormPresenterProps {
  pageMode: string;
  preview: string | null;
  onSubmit: SubmitHandler<MarketFormValues>;
  onFileClear: MouseEventHandler;
  onFileChange: MouseEventHandler;
  onPostOpen: MouseEventHandler;
  onMarketDelete: MouseEventHandler;
}

export default MarketFormPresenter;
