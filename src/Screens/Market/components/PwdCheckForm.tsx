import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { REQUIRED_TEXT } from "../../../constants";
import { useMutation } from "react-query";
import { POST_PWD_CHECK } from "../../../Apis/MarketApi";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";

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

const validSchema = yup.object().shape({
  password: yup.string().required(REQUIRED_TEXT),
});

const PwdCheckForm = ({ id }: { id: number }) => {
  const history = useHistory();
  const { setModalOpen, setSecondModalOpen } = useContext(CurrentContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PwdCheckFormValues>({
    // mode: "onChange",
    resolver: yupResolver(validSchema),
  });

  const {
    mutate: postPwdCheck,
    isLoading,
    isError,
  } = useMutation(
    ({ id, formData }: { id: number; formData: FormData }) =>
      POST_PWD_CHECK(id, formData),
    {
      onSuccess: (data) => {
        if (data.results) {
          setSecondModalOpen(false);
          setModalOpen(false);
          history.push({
            pathname: "/market/modify",
            state: {
              id,
            },
          });
        } else {
          alert(data.message);
        }
      },
      onError: (error: any) => {
        // * internal server error
        console.log(error);
      },
    }
  );

  const onSubmit: SubmitHandler<PwdCheckFormValues> = (data) => {
    const formData = new FormData();
    formData.append("password", data.password);
    postPwdCheck({ id, formData });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">
          <span>비밀번호를 입력하세요.</span>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="비밀번호 입력"
            autoComplete="on"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <input type="submit" value="확인" />
      </Form>
    </Container>
  );
};

type PwdCheckFormValues = {
  password: string;
};

export default PwdCheckForm;
