import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { eventRouteArr } from "../../Routes/Routes";
import Utils from "../../Utils/Utils";

const Container = styled.main`
  /* padding-bottom: 100px; */
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 0;
  }
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  height: 140px;
  margin: 0 auto;
  max-width: 1920px;
  background-color: #ceded6;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: 70px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: auto;
    padding: 15px 0;
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
    padding: 5px 10px;
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
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 0px;
  }
`;

const Event = () => {
  const location = useLocation();
  const isMobile = Utils.isMobile();

  return (
    <Container>
      <Nav>
        <h2 className="blind">이벤트 네비게이션</h2>

        <NavUl>
          {eventRouteArr.map(
            (item, index) =>
              item.active && (
                <NavList
                  current={location.pathname === item.pathname}
                  tintColor={index < 2 ? "#f4dcd5" : "#ceded6"}
                  key={`tab${index}`}
                >
                  {index === 2 && <Line />}
                  <SLink to={item.pathname}>
                    <SLinkText>
                      {item.text.split("<br />").map((line, idx) => {
                        let makeSpanKey = `line${idx}`;
                        return (
                          <React.Fragment key={makeSpanKey}>
                            <span>
                              {idx === 0 && (
                                <SLinkIcon
                                  src={
                                    location.pathname === item.pathname
                                      ? item.iconActive
                                      : item.icon
                                  }
                                  alt="선물 아이콘"
                                />
                              )}
                              {line}
                            </span>
                          </React.Fragment>
                        );
                      })}
                    </SLinkText>
                  </SLink>
                </NavList>
              )
          )}
        </NavUl>
      </Nav>
      <Wrapper>
        {eventRouteArr.map((item, index) => {
          return (
            <React.Fragment key={`path${index}`}>
              {item.pathname === location.pathname && item.component}
            </React.Fragment>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Event;
