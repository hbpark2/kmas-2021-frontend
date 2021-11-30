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
import { DELETE_MARKET, POST_MARKET, PUT_MARKET } from "../../Apis/MarketApi";
import { useLocation, useHistory } from "react-router-dom";
import { useGetMarket } from "../../Hook/useGetMarket";
import {
  CREATE_SUCCESS_TEXT,
  DELETE_SUCCESS_TEXT,
  MODIFY_SUCCESS_TEXT,
} from "../../constants";
import { ISuccessProps } from "../../Apis/CommonApi";
import MarketFormPresenter from "./MarketFormPresenter";
import Modal from "../../Components/Common/Modal";
import DaumPostcode from "react-daum-postcode";

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
  const onFileClear = () => {
    setValue("image", null);
    setPreview(null);
  };

  // * Mutation success function
  const onSuccess = (data: ISuccessProps) => {
    if (data.results) {
      if (pageMode === "C") {
        alert(CREATE_SUCCESS_TEXT);
      } else if (pageMode === "U") {
        alert(MODIFY_SUCCESS_TEXT);
      } else {
        alert(DELETE_SUCCESS_TEXT);
      }
      history.push("/market");
    } else {
      alert(data.message);
    }
  };

  // * 등록 Mutation
  const {
    mutate: postMarket,
    isLoading: isPostMarketLoading,
    isError: isPostMarketError,
  } = useMutation((formData: FormData) => POST_MARKET(formData), {
    onSuccess,
  });

  // * 업데이트 Mutation
  const {
    mutate: putMarket,
    isLoading: isPutMarketLoading,
    isError: isPutMarketError,
  } = useMutation(
    ({ id, formData }: { id: number; formData: FormData }) =>
      PUT_MARKET(id, formData),
    {
      onSuccess,
    }
  );

  // * 삭제 Mutation
  const {
    mutate: deleteMarket,
    isLoading: isDeleteMarketLoading,
    isError: isDeleteMarketError,
  } = useMutation(
    ({ id, formData }: { id: number; formData: FormData }) =>
      DELETE_MARKET(id, formData),
    {
      onSuccess,
    }
  );

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
      postMarket(formData);
    } else if (pageMode === "U" && id) {
      formData.append("del_image", preview ? "F" : "T");
      putMarket({ id, formData });
    }
  };

  // * Delete Function
  const onMarketDelete = async () => {
    // const password = getValues("original_password");
    const password = await trigger("original_password", { shouldFocus: true });
    if (password && id) {
      const formData = new FormData();
      formData.append("original_password", getValues("original_password"));
      setPageMode("D");
      deleteMarket({ id, formData });
    }
  };

  // * 우편번호 찾기 Open
  const onPostOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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

  const loading =
    isPostMarketLoading || isPutMarketLoading || isMarketDataLoading;
  const error = isPostMarketError || isPutMarketError || isMarketDataError;

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

      {modalOpen && (
        <Modal width="600px">
          <DaumPostcode
            style={{ height: "100%" }}
            onComplete={onPostComplete}
          />
        </Modal>
      )}
    </FormProvider>
  );
};

export default MarketFormContainer;
