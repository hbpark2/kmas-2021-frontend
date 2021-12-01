import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { useContext, useEffect, useState } from "react";
import {
  MarketFormValues,
  createValidSchema,
  modifyValidSchema,
} from "./marketType";
import Utils from "../../Utils/Utils";
import { getBase64Format } from "../../Utils/base64";
import { useMutation } from "react-query";
import { CurrentContext } from "../../Context/ContextStore";
import { POST_MARKET } from "../../Apis/MarketApi";
import { useLocation, useHistory } from "react-router-dom";
import { useGetMarket } from "../../Hook/useGetMarket";
import { CREATE_SUCCESS_TEXT } from "../../constants";
import { ISuccessProps } from "../../Apis/CommonApi";
import MarketFormPresenter from "./MarketFormPresenter";
import Modal from "../../Components/Common/Modal";
import DaumPostcode from "react-daum-postcode";
import ModifyPwdCheckForm from "./components/ModifyPwdCheckForm";

interface ILocation {
  id?: number;
}

const MarketFormContainer = () => {
  const history = useHistory();
  const location = useLocation<ILocation>();
  // * edit id
  const id = location.state?.id;
  const [pageMode, setPageMode] = useState<"U" | "C" | "D">(id ? "U" : "C");

  // * use-hook-form
  const methods = useForm<MarketFormValues>({
    // mode: "onChange",
    resolver: yupResolver(
      pageMode === "C" ? createValidSchema : modifyValidSchema
    ),
  });

  const { setValue, trigger, reset, getValues } = methods;

  // * ID 가 있다면 데이터 불러옴
  const {
    data: marketData,
    isLoading: isMarketDataLoading,
    isError: isMarketDataError,
  } = useGetMarket(id);
  // * 데이터 셋팅
  useEffect(() => {
    if (marketData) {
      reset({ ...marketData, category: marketData.category.id, image: null });
      setPreview(marketData.image);
    }
  }, [marketData]);

  // * 모달 Context
  const { modalOpen, setModalOpen } = useContext(CurrentContext);
  const [postOpen, setPostOpen] = useState<boolean>(false);
  const [pwdCheckOpen, setPwdCheckOpen] = useState<boolean>(false);

  const [mutationFormData, setMutationFormData] = useState<FormData>(
    new FormData()
  );

  // * Image Preveiw
  const [preview, setPreview] = useState<string | null>(null);

  // * file preview
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
        setValue("image", null);
        setPreview(null);
      }
    }

    return null;
  };

  // * 파일 삭제
  const onFileClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValue("image", null);
    setPreview(null);
  };

  // * 등록 Mutation
  const {
    mutate: postMarket,
    isLoading: isPostMarketLoading,
    isError: isPostMarketError,
  } = useMutation((formData: FormData) => POST_MARKET(formData), {
    onSuccess: (data: ISuccessProps) => {
      if (data.results) {
        alert(CREATE_SUCCESS_TEXT);
        history.push("/market");
      } else {
        alert(data.message);
      }
    },
  });

  // * Submit
  const onSubmit: SubmitHandler<MarketFormValues> = (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (key !== "image") {
        if (key === "hompage_link" || key === "exhibition_link") {
          formData.append(key, Utils.addHttpHttps(data[key]));
        } else {
          formData.append(key, data[key]);
        }
      } else if (key === "image") {
        const files = data.image;
        if (files && files.length > 0) formData.append(key, files[0]);
      }
    }

    if (pageMode === "C") {
      setPageMode("C");
      postMarket(formData);
    } else if (id) {
      formData.append("del_image", preview ? "F" : "T");
      setPostOpen(false);
      setPageMode("U");
      setMutationFormData(formData);
      setPwdCheckOpen(true);
      setModalOpen(true);
    }
  };

  const onMarketDelete = () => {
    setPageMode("D");
    setPostOpen(false);
    setPwdCheckOpen(true);
    setModalOpen(true);
  };

  // * 우편번호 찾기 Open
  const onPostOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPwdCheckOpen(false);
    setPostOpen(true);
    setModalOpen(true);
  };

  // * 우편번호 찾기 Complete
  const onPostComplete = (data: any) => {
    const { zonecode, jibunAddress, autoJibunAddress, address, roadAddress } =
      data;
    setValue("zonecode", zonecode);
    setValue("jibun_address", jibunAddress || autoJibunAddress);
    setValue("road_address", address || roadAddress);
    trigger(["road_address", "zonecode", "jibun_address"]);

    setModalOpen(false);
  };

  const loading = isPostMarketLoading;
  const error = isPostMarketError;

  return (
    <FormProvider {...methods}>
      <MarketFormPresenter
        pageMode={pageMode}
        preview={preview}
        onSubmit={onSubmit}
        onFileClear={onFileClear}
        onFileChange={onFileChange}
        onPostOpen={onPostOpen}
        onMarketDelete={onMarketDelete}
      />

      {modalOpen && postOpen && (
        <Modal width={Utils.isMobile() ? "90%" : "600px"}>
          <DaumPostcode
            style={{ height: "100%" }}
            onComplete={onPostComplete}
          />
        </Modal>
      )}
      {modalOpen && pwdCheckOpen && id && (
        <Modal width="300px" height="150px">
          <ModifyPwdCheckForm
            id={id}
            formData={mutationFormData}
            pageMode={pageMode}
          />
        </Modal>
      )}
    </FormProvider>
  );
};

export default MarketFormContainer;
