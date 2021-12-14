import React from "react";
import { Link, useLocation, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { eventRouteArr } from "../../Routes/Routes";
import Utils from "../../Utils/Utils";
import ChallangeEvent from "./components/ChallangeEvent";
import PhotoEvent from "./components/PhotoEvent";
import QuizEvent from "./components/QuizEvent/QuizEvent";
import ReceiptEvent from "./components/ReceiptEvent";
import TreeEvent from "./components/TreeEvent";

const Container = styled.main`
  /* padding-bottom: 100px; */

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 0;
  }
`;

const Nav = styled.div`
  position: fixed;
  display: flex;
  height: 110px;
  margin: 0 auto;
  background-color: #ceded6;
  width: 100%;
  top: 75px;
  z-index: 10;
  box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.1);

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    top: 70px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: auto;
    padding: 15px 0;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    padding: 0 0 15px;
  }

  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
    margin: 0 auto;
  }
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 100%;
    overflow-x: scroll;
    justify-content: flex-start;
    /* margin: 0 15px; */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavList = styled.li<{ current?: boolean | any; tintColor?: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: ${({ theme: { accentFont } }) => accentFont};
    font-size: 2.2rem;
  }

  h3 {
    color: ${({ current, theme: { headerActive } }) =>
      current ? headerActive : "#777"};
  }

  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.laptop} {
    &:nth-of-type(1),
    &:nth-of-type(2) {
      background-color: #f4dcd5;
    }
    &:nth-of-type(3) {
      padding-left: 15px;
      background-color: inherit;
    }
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    border: 1px solid ${({ tintColor }) => tintColor};
    border-radius: 30px;
    margin: 0 10px;
    padding: 5px 5px;
    background-color: ${({ current, tintColor }) =>
      current ? tintColor : "transparent"};

    a {
      width: 135px;
      height: 50px;
      line-height: 1em;
    }
  }
`;

const SLink = styled(Link)``;

const SLinkText = styled.h3`
  position: relative;
  text-align: left;
  span {
    display: block;
  }

  span:nth-of-type(1) {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 24px;
  }
  span:nth-of-type(2) {
    padding-left: 34px;
    font-size: 20px;
    font-family: ${({ theme: { defaultFont } }) => defaultFont};
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    span:nth-of-type(1) {
      font-size: 14px;
      margin-bottom: 0px;
    }
    span:nth-of-type(2) {
      padding-left: 22px;
      font-size: 12px;
    }
  }
`;

const SLinkIcon = styled.img`
  margin-right: 10px;
  width: 16px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-right: 5px;
    margin-bottom: 3px;
  }
`;

const Line = styled.i`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: block;
  width: 2px;
  height: 90%;
  background-color: #777;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    display: none;
  }
`;

const Wrapper = styled.div`
  /* padding-bottom: 100px; */
  margin-top: 185px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: 165px;
    padding-bottom: 0px;
  }
`;

const Event = ({ match }: RouteComponentProps) => {
  const location = useLocation();
  const isMobile = Utils.isMobile();

  const ReadyClick = (e: React.MouseEvent, index: number) => {
    // if (index < 2) {
    //   return;
    // } else {
    //   e.preventDefault();
    //   alert("준비중 입니다.");
    // }
  };

  return (
    <Container>
      <Nav>
        <h2 className="blind">이벤트 네비게이션</h2>

        <NavUl>
          {/* tintColor={index < 2 ? "#f4dcd5" : "#ceded6"} */}
          <NavList
            current={location.pathname === "/event/quiz"}
            tintColor="#f4dcd5"
          >
            <SLink to="/event/quiz">
              <SLinkText>
                <span>
                  <SLinkIcon
                    src={
                      location.pathname === "/event/quiz"
                        ? "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon-active.png"
                        : "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon.png"
                    }
                    alt="선물 아이콘"
                  />
                  EVENT 01
                </span>
                <span>영상 퀴즈 이벤트</span>
              </SLinkText>
            </SLink>
          </NavList>

          <NavList
            current={location.pathname === "/event/challange"}
            tintColor="#f4dcd5"
          >
            <SLink to="/event/challange">
              <SLinkText>
                <span>
                  <SLinkIcon
                    src={
                      location.pathname === "/event/challange"
                        ? "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon-active.png"
                        : "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon.png"
                    }
                    alt="선물 아이콘"
                  />
                  EVENT 02
                </span>
                <span>크확행 챌린지</span>
              </SLinkText>
            </SLink>
          </NavList>

          <NavList
            current={location.pathname === "/event/tree"}
            tintColor="#ceded6"
          >
            <Line />
            <SLink to="/event/tree">
              <SLinkText>
                <span>
                  <SLinkIcon
                    src={
                      location.pathname === "/event/tree"
                        ? "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon-active.png"
                        : "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon.png"
                    }
                    alt="선물 아이콘"
                  />
                  현장 이벤트 1
                </span>
                <span>크확행 트리 EVENT</span>
              </SLinkText>
            </SLink>
          </NavList>

          <NavList
            current={location.pathname === "/event/receipt"}
            tintColor="#ceded6"
          >
            <SLink to="/event/receipt">
              <SLinkText>
                <span>
                  <SLinkIcon
                    src={
                      location.pathname === "/event/receipt"
                        ? "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon-active.png"
                        : "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon.png"
                    }
                    alt="선물 아이콘"
                  />
                  현장 이벤트 2
                </span>
                <span>영수증 응모 EVENT</span>
              </SLinkText>
            </SLink>
          </NavList>

          <NavList
            current={location.pathname === "/event/photo"}
            tintColor="#ceded6"
          >
            <SLink to="/event/photo">
              <SLinkText>
                <span>
                  <SLinkIcon
                    src={
                      location.pathname === "/event/photo"
                        ? "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon-active.png"
                        : "https://thegn.speedgabia.com/kmas-2021/event/event-nav-gift-icon.png"
                    }
                    alt="선물 아이콘"
                  />
                  현장 이벤트 3
                </span>
                <span>크확행 포토 EVENT</span>
              </SLinkText>
            </SLink>
          </NavList>
        </NavUl>
      </Nav>
      <Wrapper>
        {match.path === "/event/quiz" && <QuizEvent />}
        {match.path === "/event/challange" && <ChallangeEvent />}
        {match.path === "/event/tree" && <TreeEvent />}
        {match.path === "/event/receipt" && <ReceiptEvent />}
        {match.path === "/event/photo" && <PhotoEvent />}
      </Wrapper>
    </Container>
  );
};

export default Event;
