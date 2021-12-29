import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 0;
  }
`;

export const Nav = styled.div`
  position: fixed;
  display: flex;
  height: 110px;
  margin: 0 auto;
  background-color: #ceded6;
  width: 100%;
  top: 75px;
  z-index: 10;
  box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.1);
  /* filter: blur(3px); */
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

export const NavUl = styled.ul`
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

export const NavList = styled.li<{
  current?: boolean | any;
  tintColor?: string;
}>`
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

export const SLink = styled(Link)``;

export const SLinkText = styled.h3`
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

export const SLinkIcon = styled.img`
  margin-right: 10px;
  width: 16px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-right: 5px;
    margin-bottom: 3px;
  }
`;

export const Line = styled.i`
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

export const Wrapper = styled.div`
  /* padding-bottom: 100px; */
  margin-top: 185px;
  filter: blur(3px);

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: 165px;
    padding-bottom: 0px;
  }
`;
