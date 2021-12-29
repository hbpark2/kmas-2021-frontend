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

const LinkButton = styled(Link)`
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    img {
      width: 250px;
    }
  }
`;

const Winner = () => {
  return (
    <Container>
      <Top>
        <img
          src="https://thegn.speedgabia.com/kmas-2021/winner/winner-popup-title.png"
          alt="당첨자 발표"
        />
      </Top>
      <Bottom>
        <LinkButton to="/prized">
          <img
            src="https://thegn.speedgabia.com/kmas-2021/winner/winner-popup-button.png"
            alt="당참자 발표 보라가기 버튼"
          />
        </LinkButton>
      </Bottom>
    </Container>
  );
};

export default Winner;
