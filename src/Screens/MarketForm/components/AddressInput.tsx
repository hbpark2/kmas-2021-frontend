import { useFormContext } from "react-hook-form";

const AddressInput: React.FC<AddressInpuProps> = ({ onPostOpen }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor="detail_address">
      <span>기업 주소</span>
      <div>
        <input
          type="text"
          id="zonecode"
          readOnly={true}
          {...register("zonecode")}
        />
        <button onClick={(e) => onPostOpen(e)} type="button">
          우편번호 찾기
        </button>
      </div>
      <div>
        <input
          type="text"
          id="jibun_address"
          readOnly={true}
          {...register("jibun_address")}
        />
      </div>
      <div style={{ display: "none" }}>
        <input
          type="text"
          id="road_address"
          readOnly={true}
          {...register("road_address")}
        />
      </div>
      {(errors.jibun_address || errors.road_address) && (
        <p>{errors.jibun_address.message || errors.road_address.message}</p>
      )}

      <div>
        <input
          type="text"
          id="detail_address"
          {...register("detail_address")}
          placeholder="상세주소"
        />
      </div>
      {errors.detail_address && <p>{errors.detail_address.message}</p>}
    </label>
  );
};

interface AddressInpuProps {
  onPostOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default AddressInput;
