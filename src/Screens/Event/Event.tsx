import React, { useEffect } from "react";
import { Link, useLocation, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { eventRouteArr } from "../../Routes/Routes";
import Utils from "../../Utils/Utils";
import ChallangeEvent from "./components/ChallangeEvent";
import DisableScreen from "./components/DisableScreen";
import PhotoEvent from "./components/PhotoEvent";
import QuizEvent from "./components/QuizEvent/QuizEvent";
import ReceiptEvent from "./components/ReceiptEvent";
import TreeEvent from "./components/TreeEvent";
import {
  Container,
  Nav,
  NavUl,
  NavList,
  SLink,
  SLinkText,
  SLinkIcon,
  Line,
  Wrapper,
} from "./styles";

const Event = ({ match }: RouteComponentProps) => {
  const location = useLocation();
  const isMobile = Utils.isMobile();
  // useEffect(() => {
  //   let alertMessage = "";
  //   if (location.pathname.indexOf("quiz") !== -1) {
  //     alertMessage = "이벤트가 종료되었습니다. 당첨자 발표일 2022.01.13(목)";
  //   } else if (location.pathname.indexOf("challange") !== -1) {
  //     alertMessage = "이벤트가 종료되었습니다. 당첨자 발표일 2022.01.13(목)";
  //   } else if (location.pathname.indexOf("receipt") !== -1) {
  //     alertMessage = "이벤트가 종료되었습니다. 당첨자 발표일 2021.12.29(수)";
  //   } else {
  //     alertMessage = "이벤트가 종료되었습니다.";
  //   }

  //   // setTimeout(() => {
  //   alert(alertMessage);
  //   // }, 300);
  // }, [location]);

  return (
    <>
      <Container>
        <Nav>
          <h2 className="blind">이벤트 네비게이션</h2>

          <NavUl>
            <NavList
              current={
                location.pathname === "/event/quiz" ||
                location.pathname === "/event/quiz/"
              }
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
              current={
                location.pathname === "/event/challange" ||
                location.pathname === "/event/challage/"
              }
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
              current={
                location.pathname === "/event/tree" ||
                location.pathname === "/event/tree/"
              }
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
              current={
                location.pathname === "/event/receipt" ||
                location.pathname === "/event/receipt/"
              }
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
              current={
                location.pathname === "/event/photo" ||
                location.pathname === "/event/photo/"
              }
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
        <DisableScreen>
          <Wrapper>
            {match.path === "/event/quiz" && <QuizEvent />}
            {match.path === "/event/challange" && <ChallangeEvent />}
            {match.path === "/event/tree" && <TreeEvent />}
            {match.path === "/event/receipt" && <ReceiptEvent />}
            {match.path === "/event/photo" && <PhotoEvent />}
          </Wrapper>
        </DisableScreen>
      </Container>
    </>
  );
};

export default Event;
