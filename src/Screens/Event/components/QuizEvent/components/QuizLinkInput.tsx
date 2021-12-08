import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "./QuizInput";

const QuizLinkInput = () => {
  const {
    register,
    formState: { errors },
    watch,
    clearErrors,
  } = useFormContext();

  const { url_1, url_2, url_3 } = watch();

  useEffect(() => {
    if (url_1) {
      clearErrors(["url_2", "url_3"]);
    } else if (url_2) {
      clearErrors(["url_1", "url_3"]);
    } else if (url_3) {
      clearErrors(["url_1", "url_2"]);
    }
  }, [url_1, url_2, url_3]);

  return (
    <>
      <Label htmlFor="url_1">
        <h4>공유 URL ①</h4>
        <input
          type="text"
          id="url_1"
          {...register("url_1")}
          placeholder="해당 영상을 본인 SNS 및 블로그에 공유했을 경우 남겨주세요"
          autoComplete="on"
        />
      </Label>
      <Label htmlFor="url_2">
        <h4>공유 URL ②</h4>
        <input
          type="text"
          id="url_2"
          {...register("url_2")}
          placeholder="해당 영상을 본인 SNS 및 블로그에 공유했을 경우 남겨주세요"
          autoComplete="on"
        />
      </Label>
      <Label htmlFor="url_3">
        <h4>공유 URL ③</h4>
        <input
          type="text"
          id="url_3"
          {...register("url_3")}
          placeholder="해당 영상을 본인 SNS 및 블로그에 공유했을 경우 남겨주세요"
          autoComplete="on"
        />
      </Label>
      {(errors["url_1"] && <p>{errors["url_1"].message}</p>) ||
        (errors["url_2"] && <p>{errors["url_2"].message}</p>) ||
        (errors["url_3"] && <p>{errors["url_3"].message}</p>)}
    </>
  );
};

export default QuizLinkInput;
