import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Disabled = styled.div`
  position: fixed;
  top: 75px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 50;
  overflow: hidden;

  span {
    display: block;
    font-family: ${({ theme: { accentFont } }) => accentFont};
    font-size: 5rem;
    color: #fff;
    margin: 15px 0;
    width: 780px;
    text-align: left;
  }

  .title {
    font-size: 5.5rem;
  }
  .bottom {
    margin-top: 30px;
    font-size: 4rem;
  }
  .desc {
    font-size: 3rem;
  }

  .margin {
    margin-left: -3px;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    top: 70px;
    span {
      text-align: center;
      width: 350px;
      font-size: 2.8rem;
      margin: 20px 0;
    }

    .title {
      font-size: 3.5rem;
    }
    .bottom {
      margin-top: 30px;
      font-size: 2.5rem;
    }
    .desc {
      font-size: 2rem;
    }
    .margin {
      margin-left: 0;
    }

    .custom-margin-1 {
      text-indent: 7.5px;
    }
    .custom-margin-2 {
      text-indent: -4px;
    }
  }
`;

const Inner = styled.div`
  margin-top: -150px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: -50px;
  }
`;

const DisableScreen: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container>
      <Disabled>
        <Inner>
          <span className="title margin">이벤트가 종료되었습니다.</span>
          <br />
          <span className="desc custom-margin-1">EVENT 01. 영상퀴즈이벤트</span>
          <span className="desc">EVENT 02. 크확행 챌린지</span>
          <span className="bottom margin">당첨자 발표 : 1/13(목)</span>
          <br />
          <br />
          <span className="desc custom-margin-2">
            현장이벤트1. 크확행 트리 EVENT
          </span>
          <span className="desc">현장이벤트2. 영수증 응모 EVENT</span>
          <span className="desc">현장이벤트3. 크확행 포토 EVENT</span>
          <span className="bottom margin">당첨자 발표 : 12/29(수)</span>
        </Inner>
      </Disabled>
      {children}
    </Container>
  );
};

export default DisableScreen;
