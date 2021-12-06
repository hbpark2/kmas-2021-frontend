import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { Label } from "./MarketInput";

const SLabel = styled(Label)`
  div {
    flex-direction: column;
    /* margin: 15px 0; */
  }
  input {
    width: 580px;
  }

  .label-button-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    input {
      width: 400px;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      font-size: 2rem;
      border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
      background-color: ${({ theme: { tableHeader } }) => tableHeader};
      border-radius: 15px;
      color: ${({ theme: { headerDefault } }) => headerDefault};
      cursor: pointer;
    }
  }
  .middle-input {
    margin: 15px 0;
  }
  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.laptop} {
    align-items: flex-start;
    h4 {
      display: flex;
      align-items: center;
      height: 60px;
    }
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    display: block;
    input {
      width: 100%;
    }
    .label-button-wrap {
      input {
        width: 65% !important;
      }
      button {
        width: 30%;
        height: 60px;
      }
    }
    .middle-input {
      margin: 10px 0;
    }

    h4 {
      margin-bottom: 15px;
    }
  }
`;

const AddressBox = styled.div``;

const AddressInput: React.FC<AddressInpuProps> = ({ onPostOpen }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <SLabel htmlFor="detail_address">
        <h4>기업 주소</h4>
        <AddressBox>
          <div className="label-button-wrap">
            <input
              type="text"
              id="zonecode"
              readOnly={true}
              placeholder="필수 입력사항입니다"
              {...register("zonecode")}
            />
            <button onClick={(e) => onPostOpen(e)} type="button">
              우편번호 찾기
            </button>
          </div>
          <div style={{ display: "none" }}>
            <input
              type="text"
              id="jibun_address"
              readOnly={true}
              placeholder="필수 입력사항입니다"
              {...register("jibun_address")}
            />
          </div>
          <div className="middle-input">
            <input
              type="text"
              id="road_address"
              readOnly={true}
              placeholder="필수 입력사항입니다"
              {...register("road_address")}
            />
          </div>
          <div>
            <input
              type="text"
              id="detail_address"
              {...register("detail_address")}
              placeholder="상세주소를 입력해주세요"
            />
          </div>
        </AddressBox>
      </SLabel>
      {(errors["detail_address"] && <p>{errors["detail_address"].message}</p>) ||
        (errors["jibun_address"] && <p>{errors["jibun_address"].message}</p>) ||
        (errors["road_address"] && <p>{errors["road_address"].message}</p>)}
    </>
  );
};

interface AddressInpuProps {
  onPostOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default AddressInput;
