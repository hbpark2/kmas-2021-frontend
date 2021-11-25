import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";

import { yupResolver } from "@hookform/resolvers/yup";

import styled from "styled-components";
import Modal from "../../Components/Common/Modal";
import { useState } from "react";
import { categoryArr, MarketFormValues, inputArr, schema } from "./marketType";
import Utils from "../../Utils/Utils";
import { getBase64Format } from "../../Utils/base64";
import MarketInput from "./components/MarketInput";
import AddressInput from "./components/AddressInput";
import { useMutation } from "react-query";
import { POST_MARKET } from "../../Apis/marketApi";

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

const MarketForm = () => {
  const methods = useForm<MarketFormValues | any>({
    // mode: "onChange",
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = methods;

  const [isPostOpen, setIsPostOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>("");

  const onPostOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPostOpen(true);
  };

  const onPostClose = () => {
    setIsPostOpen(false);
  };

  const onFileChange = async (e: File | any) => {
    const {
      target: { files },
    } = e;

    if (files.length > 0) {
      //  파일 확장자 && 용량 체크
      const file = files[0];
      if (Utils.checkImageFile(file) && Utils.checkFileSize(file, 2)) {
        const theFile = files[0];
        const src = await getBase64Format(theFile);
        setPreview(src);
      } else {
        setValue("image", undefined);
        setPreview(null);
      }
    }

    return null;
  };

  const onFileClear = () => {
    setValue("image", undefined);
    setPreview(null);
  };

  const {
    mutate: postMarket,
    isLoading,
    isError,
  } = useMutation((formData: FormData) => POST_MARKET(formData));

  const onSubmit: SubmitHandler<MarketFormValues> = (
    data: MarketFormValues
  ) => {
    const formData = new FormData();
    for (const key in data) {
      if (key !== "image") {
        formData.append(key, data[key]);
      } else if (key === "image") {
        const file = data.image;
        if (file) formData.append(key, file[0]);
      }
    }
    postMarket(formData);
  };

  console.log(errors);

  const onPostComplete = (data: any) => {
    const { zonecode, jibunAddress, autoJibunAddress, address, roadAddress } =
      data;
    setValue("zonecode", zonecode);
    setValue("jibun_address", jibunAddress || autoJibunAddress);
    setValue("road_address", address || roadAddress);
    trigger("road_address");
    setIsPostOpen(false);
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <select {...register("category")}>
            {categoryArr.map((item, index) => (
              <option key={`categoryOption${index}`} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>

          {inputArr.map((item, index) => {
            if (item.text === "주소") {
              return (
                <AddressInput onPostOpen={onPostOpen} key={`label${index}`} />
              );
            } else {
              return (
                <MarketInput
                  key={`label${index}`}
                  text={item.text}
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  error={errors[item.name]?.message}
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
          </label>

          {isPostOpen && (
            <Modal onCloseModal={onPostClose} width="600px">
              <DaumPostcode
                style={{ height: "100%" }}
                onComplete={onPostComplete}
              />
            </Modal>
          )}

          <input type="submit" />
        </Form>
      </FormProvider>
    </Container>
  );
};

export default MarketForm;
