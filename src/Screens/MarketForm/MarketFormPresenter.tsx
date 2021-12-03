import { MouseEventHandler } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import AddressInput from "./components/AddressInput";
import MarketInput, { Label } from "./components/MarketInput";
import MarketUpdatePassword from "./components/MarketUpdatePassword";
import { categoryArr, inputArr, MarketFormValues } from "./marketType";
import Utils from "../../Utils/Utils";
import {
  ButtonWrap,
  Container,
  DeleteButton,
  Form,
  ImageDeleteButton,
  MarketHeader,
  MarketImage,
  RequestBtn,
  SelectBox,
  SuccessButton,
  UploadBox,
  UploadButton,
  UploadWrap,
} from "./styles";

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
  const isMobile = Utils.isMobile();

  return (
    <Container>
      <h2 className="blind">참여업체 신청하기</h2>
      <MarketHeader>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/market/mo-market-request-header.png"
              : "https://thegn.speedgabia.com/kmas-2021/market/market-request-header.png"
          }
          alt=""
        />
      </MarketHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <h4>카테고리</h4>
          <SelectBox {...register("category")}>
            {categoryArr.map((item, index) => (
              <option key={`categoryOption${index}`} value={item.value}>
                {item.text}
              </option>
            ))}
          </SelectBox>
        </Label>
        {errors["category"] && <p>{errors["category"].message}</p>}
        {inputArr.map((item, index) => {
          if (item.text === "주소") {
            return <AddressInput onPostOpen={onPostOpen} key={`label${index}`} />;
          } else if (item.text === "이미지") {
            return (
              <UploadWrap htmlFor="image" key={`label${index}`}>
                <h4>사진 업로드</h4>
                <UploadBox>
                  <UploadButton preview={preview}>
                    {preview ? (
                      <MarketImage src={preview} alt="preview" />
                    ) : (
                      <img
                        src="https://thegn.speedgabia.com/kmas-2021/market/upload-image.png"
                        alt="사진업로드 버튼"
                      />
                    )}
                  </UploadButton>

                  <input
                    type="file"
                    id="image"
                    accept=" .jpg, .png"
                    style={{ display: "none" }}
                    {...register("image", {
                      onChange: onFileChange,
                    })}
                  />
                  {errors && errors.image && <p>{errors.image?.message}</p>}
                  {preview && (
                    <ImageDeleteButton type="button" onClick={onFileClear}>
                      이미지 삭제
                    </ImageDeleteButton>
                  )}
                </UploadBox>
              </UploadWrap>
            );
          } else if (pageMode !== "C" && item.text === "비밀번호") {
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

        {pageMode === "C" && (
          <RequestBtn type="submit">
            <img
              src="https://thegn.speedgabia.com/kmas-2021/market/market-request-btn.png"
              alt="신청하기버튼"
            />
          </RequestBtn>
        )}
        {pageMode !== "C" && (
          <ButtonWrap>
            <DeleteButton type="button" value="삭제하기" onClick={onMarketDelete} />
            <SuccessButton type="submit" value="수정하기" />
          </ButtonWrap>
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
