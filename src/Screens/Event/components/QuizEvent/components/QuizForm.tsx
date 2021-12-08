import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import analytics from "../../../../../analytics";
import { ISuccessProps } from "../../../../../Apis/CommonApi";
import { POST_QUIZ } from "../../../../../Apis/EventApi";
import { EVENT_SUCCESS_TEXT } from "../../../../../constants";
import { CurrentContext } from "../../../../../Context/ContextStore";
import Utils from "../../../../../Utils/Utils";
import { inputArr, quizFormValidSchema, QuizFormValues } from "./quizFormType";
import QuizInput from "./QuizInput";
import QuizLinkInput from "./QuizLinkInput";
import {
  ButtonWrap,
  Container,
  DeleteButton,
  Form,
  SuccessButton,
} from "./styles";

const QuizForm = () => {
  const { setModalOpen, setSecondModalOpen } = useContext(CurrentContext);
  const methods = useForm<QuizFormValues>({
    // mode: "onChange",
    resolver: yupResolver(quizFormValidSchema),
  });

  const { handleSubmit } = methods;

  // * 등록 Mutation
  const {
    mutate: postQuiz,
    isLoading,
    isError,
  } = useMutation((formData: FormData) => POST_QUIZ(formData), {
    onSuccess: (data: ISuccessProps) => {
      if (data.results) {
        // * GA 설정
        analytics.sendEvent({
          category: "이벤트",
          action: "이벤트 참여",
          label: "영상 퀴즈 이벤트",
        });
        alert(EVENT_SUCCESS_TEXT);
        setModalOpen(false);
      } else {
        alert(data.message);
      }
    },
  });

  const onSubmit = (data: QuizFormValues) => {
    const formData = new FormData();
    for (const key in data) {
      if (key === "url_1" || key === "url_2" || key === "url_3") {
        formData.append(key, data[key] ? Utils.addHttpHttps(data[key]) : "");
      } else {
        formData.append(key, data[key]);
      }
    }
    postQuiz(formData);
  };

  return (
    <Container>
      <h2 className="blind">영상 퀴즈 이벤트 참여</h2>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {inputArr.map((item, index) => {
            if (item.text === "link") {
              return <QuizLinkInput key={`label${index}`} />;
            }
            return (
              <QuizInput
                key={`label${index}`}
                text={item.text}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
              />
            );
          })}
          <ButtonWrap>
            <DeleteButton
              type="button"
              value="뒤로가기"
              onClick={() => setSecondModalOpen(true)}
            />
            <SuccessButton type="submit" value="정답 제출" />
          </ButtonWrap>
        </Form>
      </FormProvider>
    </Container>
  );
};

export default QuizForm;
