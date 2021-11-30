import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  DELETE_SUCCESS_TEXT,
  MODIFY_SUCCESS_TEXT,
  REQUIRED_TEXT,
} from "../../../constants";
import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import { useMutation } from "react-query";
import { DELETE_MARKET, PUT_MARKET } from "../../../Apis/MarketApi";
import { useHistory } from "react-router-dom";
import { ISuccessProps } from "../../../Apis/CommonApi";

const Container = styled.div`
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 0 auto;
  font-size: 2rem;
  label {
    display: block;
    width: 100%;
    text-align: center;
  }

  span {
    display: block;
    margin: 10px auto 20px;
  }
  p {
    color: #f00;
  }
`;

const PWInput = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 5px;
  border: 1px solid ${({ theme: { gray } }) => gray};
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Button = styled.input`
  width: 250px;
  border: 1px solid ${({ theme: { headerDefault } }) => headerDefault};
  background-color: ${({ theme: { tableHeader } }) => tableHeader};
  padding: 5px 0;
  border-radius: 5px;
  color: ${({ theme: { headerDefault } }) => headerDefault};
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 2.4rem;
`;

const validSchema = yup.object().shape({
  password: yup.string().required(REQUIRED_TEXT),
});

const ModifyPwdCheckForm = ({
  id,
  formData,
  pageMode,
}: {
  id: number;
  formData: FormData;
  pageMode: "U" | "C" | "D";
}) => {
  const history = useHistory();
  const { setModalOpen } = useContext(CurrentContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<ModifyPwdCheckFormValues>({
    // mode: "onChange",
    resolver: yupResolver(validSchema),
  });

  const onSuccess = (data: ISuccessProps) => {
    if (data.results) {
      alert(pageMode === "U" ? MODIFY_SUCCESS_TEXT : DELETE_SUCCESS_TEXT);
      setModalOpen(false);
      history.push("/market");
    } else {
      alert(data.message);
    }
  };

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

  // * Delete Function
  const onMarketDelete = async () => {
    const password = await trigger("password", { shouldFocus: true });
    if (password && id) {
      const formData = new FormData();
      formData.append("original_password", getValues("password"));
      deleteMarket({ id, formData });
    }
  };

  const onSubmit: SubmitHandler<ModifyPwdCheckFormValues> = (data) => {
    formData.append("original_password", data.password);
    putMarket({ id, formData });
  };

  const loading = isPutMarketLoading || isDeleteMarketLoading;
  const error = isPutMarketError || isDeleteMarketError;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">
          <span>비밀번호 확인 비밀번호를 입력하세요.</span>
          <PWInput
            type="password"
            id="password"
            {...register("password")}
            placeholder="비밀번호 입력"
            autoComplete="on"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        {pageMode === "U" && <Button type="submit" value="확인" />}
        {pageMode === "D" && (
          <Button type="button" value="확인" onClick={onMarketDelete} />
        )}
      </Form>
    </Container>
  );
};

type ModifyPwdCheckFormValues = {
  password: string;
};

export default ModifyPwdCheckForm;
