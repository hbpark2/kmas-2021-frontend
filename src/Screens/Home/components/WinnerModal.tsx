import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrentContext } from "../../../Context/ContextStore";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("https://thegn.speedgabia.com/kmas-2021/winner/winner-popup-bg.png")
    no-repeat;
  background-size: cover;
  border-radius: 25px;
  overflow: hidden;
`;

const Top = styled.div`
  padding-top: 100px;
  img {
    margin: 0 auto;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    padding-top: 50px;
    img {
      width: 250px;
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 150px;
  background: url("https://thegn.speedgabia.com/kmas-2021/winner/winner-popup-bottom.png")
    no-repeat;
  background-size: cover;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: 320px;
    height: 100px;
  }
`;

const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-right: 1px solid #fff;
  color: #fff !important;
  span {
    font-size: 21px;
  }

  &:last-child {
    border-right: none;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    span {
      font-size: 14px;
    }
  }
`;

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  margin-top: 15px;
  color: #fff !important;
  background-color: ${({ theme: { headerActive } }) => headerActive};
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: 93px;
    height: 24px;
    margin-top: 10px;
    font-size: 14px;
  }
`;

const WinnerModal = () => {
  return (
    <Container>
      <Top>
        <img
          src="https://thegn.speedgabia.com/kmas-2021/winner/winner-popup-title.png"
          alt="당첨자 발표"
        />
      </Top>
      <Bottom>
        <LinkWrap>
          <span>영수증 이벤트</span>
          <span>당첨자 발표</span>

          <LinkButton to={{ pathname: "/prized", state: "receipt" }}>
            바로가기
          </LinkButton>
        </LinkWrap>

        <LinkWrap>
          <span>영상퀴즈 이벤트</span>
          <span>당첨자 발표</span>

          <LinkButton to={{ pathname: "/prized", state: "quiz" }}>
            바로가기
          </LinkButton>
        </LinkWrap>

        <LinkWrap>
          <span>크확행 챌린지</span>
          <span>당첨자 발표</span>

          <LinkButton to={{ pathname: "/prized", state: "challange" }}>
            바로가기
          </LinkButton>
        </LinkWrap>
      </Bottom>
    </Container>
  );
};

export default WinnerModal;
