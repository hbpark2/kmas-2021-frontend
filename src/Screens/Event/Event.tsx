import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { eventRouteArr } from "../../Routes/Routes";

const Container = styled.main`
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 30px;
  }
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: 1920px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: 70px;
    justify-content: center;
    align-items: center;
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
    a {
      padding: 10px 0;
      line-height: 1em;
    }
  }
`;

const SLink = styled(Link)``;

const Wrapper = styled.main`
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 30px;
  }
`;

const Event = ({ children }: { children: React.ReactChild }) => {
  const location = useLocation();

  return (
    <Container>
      <Nav>
        <h2 className="blind">네비게이션</h2>

        <NavUl>
          {eventRouteArr.map(
            (item, index) =>
              item.active && (
                <NavList current={location.pathname === item.pathname} key={`tab${index}`}>
                  <SLink to={item.pathname}>
                    <h3>{item.text}</h3>
                  </SLink>
                </NavList>
              )
          )}
        </NavUl>
      </Nav>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Event;
