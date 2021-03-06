import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import MenuBtn from "./components/MenuBtn";
import { CurrentContext } from "../../../Context/ContextStore";
import { useContext } from "react";
import Utils from "../../../Utils/Utils";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background-color: #fff;
  z-index: 100;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    height: 70px;
  }
`;

const Nav = styled.nav`
  position: relative;
  display: flex;
  height: 100%;
  margin: 0 auto;
  margin-left: 50px;
  max-width: 1920px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin: 0;
    justify-content: flex-start;
    margin-left: 20px;
    align-items: center;
  }

  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
    margin: 0 auto;
  }
`;

const NavUl = styled.ul<{ menuOpen: boolean }>`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  max-width: 1280px;
  margin-left: 100px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    display: none;
  }
`;

const MobileNavWrap = styled.div<{ menuOpen: boolean }>`
  display: none;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    position: fixed;
    top: 0;
    margin: 0;
    display: block;
    width: 80%;
    height: 100%;
    background-color: #fff;
    height: 100vh;
    transition: left 0.5s;
    z-index: 5;

    ${({ menuOpen }) =>
      menuOpen
        ? css`
            left: 20%;
          `
        : css`
            left: 105%;
          `}
  }
`;

const MobileNavUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 400px;
  margin: 0 50px;
  border-top: 1px solid ${({ theme: { gray } }) => gray};
`;

const MobileLogoWrap = styled.div`
  padding: 30px 50px 70px;
`;

const LeftBar = styled.div`
  img {
    display: block;
    position: absolute;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
  }
`;

const Layer = styled.i<{ menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  ${({ menuOpen }) =>
    menuOpen
      ? css`
          visibility: visible;
          opacity: 1;
          z-index: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          z-index: -10;
        `}
`;

const LayerCloseBtn = styled.i`
  position: relative;
  top: 30px;
  left: 15px;
`;

const NavList = styled.li<{ current?: boolean | any }>`
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
    color: ${({ current, theme: { headerDefault, headerActive } }) =>
      current ? headerActive : headerDefault};
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 10px 0;
    a {
      justify-content: flex-start;
      height: 45px;
    }
  }
`;

const SLink = styled(Link)``;

const HeaderDecoration = styled.div`
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
    position: fixed;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: auto;
    }
  }
`;

const LogoWrap = styled(Link)`
  display: flex;
  align-items: center;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    img {
      width: 220px;
    }
  }
`;

const Header = () => {
  const { menuOpen, setMenuOpen } = useContext(CurrentContext);
  const location = useLocation();
  const isMobile = Utils.isMobile();

  const menuArr = [
    { text: "K-MAS ????????? ??????", pathname: "/", active: true },
    {
      text: "?????????",
      pathname: "/event/quiz",
      active: true,
      current: location.pathname.indexOf("event") > 0,
    },
    { text: "?????? ?????????", pathname: "/exhibition", active: true },
    { text: "??????????????????", pathname: "/live", active: true },
    { text: "????????????", pathname: "/news", active: true },
    { text: "????????????", pathname: "/market", active: true },
  ];

  const onHeaderCreator = ({
    active,
    pathname,
    text,
  }: {
    active: boolean;
    pathname: string;
    text: string;
  }) => {
    if (active) {
      return (
        <SLink to={pathname}>
          <h3>{text}</h3>
        </SLink>
      );
    } else {
      return (
        <SLink
          to="#"
          onClick={() =>
            alert("???????????? ?????????????????????.\n* ????????? ?????? : 1/13(???)")
          }
        >
          <h3>{text}</h3>
        </SLink>
      );
    }
  };

  return (
    <Container>
      <h1 className="blind">K-MAS</h1>

      <Nav>
        <h2 className="blind">???????????????</h2>

        <LogoWrap to="/">
          <img
            src={
              isMobile
                ? "https://thegn.speedgabia.com/kmas-2021/main/mo-logo.png"
                : "https://thegn.speedgabia.com/kmas-2021/common/kmas-logo.png"
            }
            alt="k-mas ??????"
          />
        </LogoWrap>

        <NavUl menuOpen={menuOpen}>
          {menuArr.map((item, index) => (
            <NavList
              current={
                item.current
                  ? item.current
                  : location.pathname === item.pathname
              }
              key={`menu${index}`}
            >
              {onHeaderCreator({
                active: item.active,
                pathname: item.pathname,
                text: item.text,
              })}
            </NavList>
          ))}
        </NavUl>

        <MobileNavWrap menuOpen={menuOpen}>
          <LeftBar>
            <img
              src="https://thegn.speedgabia.com/kmas-2021/common/mo-nav-left.png"
              alt=""
            />
          </LeftBar>

          <MobileLogoWrap>
            <img
              src="https://thegn.speedgabia.com/kmas-2021/common/kmas-logo.png"
              alt="k-mas ??????"
            />
          </MobileLogoWrap>
          <MobileNavUl>
            {menuArr.map((item, index) => (
              <NavList
                current={
                  item.current
                    ? item.current
                    : location.pathname === item.pathname
                }
                key={`menu${index}`}
                onClick={() => {
                  if (item.active) setMenuOpen(false);
                }}
              >
                {onHeaderCreator({
                  active: item.active,
                  pathname: item.pathname,
                  text: item.text,
                })}
              </NavList>
            ))}
          </MobileNavUl>
        </MobileNavWrap>
      </Nav>

      <MenuBtn />

      <Layer menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
        <LayerCloseBtn>
          <img
            src="https://thegn.speedgabia.com/kmas-2021/common/mo-close-white.png"
            alt="????????????"
          />
        </LayerCloseBtn>
      </Layer>
      {location.pathname === "/" && (
        <HeaderDecoration>
          <img
            src={
              window.innerWidth > 1920
                ? "https://thegn.speedgabia.com/kmas-2021/common/wide-header-bottom.png"
                : window.innerWidth > 639
                ? "https://thegn.speedgabia.com/kmas-2021/common/header-bottom.png"
                : "https://thegn.speedgabia.com/kmas-2021/common/mo-header-bottom.png"
            }
            alt="?????????????????????"
          />
        </HeaderDecoration>
      )}
    </Container>
  );
};

export default Header;
