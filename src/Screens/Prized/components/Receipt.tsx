import styled from "styled-components";
import Utils from "../../../Utils/Utils";

const Top = styled.div`
  img {
    width: 100%;
  }
`;

const Bottom = styled.div`
  background-color: #386b54;
  background-image: url("https://thegn.speedgabia.com/kmas-2021/event/event-bg-snow.png");
  background-size: cover;
  padding: 120px 0 160px;
  img {
    width: 50%;
    max-width: 1320px;
    margin: 0 auto;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    img {
      width: 90%;
    }
    padding-top: 25px;
    background-image: none;
    padding-bottom: 50px;
  }
`;

const Receipt = () => {
  const isMobile = Utils.isMobile();

  return (
    <>
      <Top>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/winner/prized-top-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/winner/prized-top.png"
          }
          alt="당첨자발표"
        />
      </Top>
      <Bottom>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/winner/prized-content-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/winner/prized-content.png"
          }
          alt=""
        />
      </Bottom>
    </>
  );
};
export default Receipt;
