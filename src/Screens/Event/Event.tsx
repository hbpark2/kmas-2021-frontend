import { Link, Route, Switch, match, useHistory } from "react-router-dom";
import styled from "styled-components";
import OnlineEvent from "./components/OnlineEvent";
import PhotoEvent from "./components/PhotoEvent";
import ReceiptEvent from "./components/ReceiptEvent";
import TreeEvent from "./components/TreeEvent";
import { useEffect } from "react";

const Container = styled.main`
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 30px;
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

const NavUl = styled.ul`
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
    }
  }
`;

const SLink = styled(Link)``;

const Event = ({
  match: { path: motherPath },
  location: { pathname: currentPath },
}: {
  match: match;
  location: Location;
}) => {
  const history = useHistory();

  const tabArr: TEventListProps[] = [
    {
      text: "크확행 트리 이벤트",
      pathname: `${motherPath}`,
      component: <TreeEvent />,
      active: true,
    },
    {
      text: "영수증 이벤트",
      pathname: `${motherPath}/receipt`,
      component: <ReceiptEvent />,
      active: true,
    },
    {
      text: "포토 이벤트",
      pathname: `${motherPath}/photo`,
      component: <PhotoEvent />,
      active: true,
    },
    {
      text: "온라인 이벤트",
      pathname: `${motherPath}/online`,
      component: <OnlineEvent />,
      active: true,
    },
  ];

  // useEffect(() => {
  //   if (motherPath === currentPath) {
  //     history.push(`${motherPath}/tree`);
  //   }
  // }, [motherPath, currentPath]);

  return (
    <Container>
      <Nav>
        <h2 className="blind">네비게이션</h2>

        <NavUl>
          {tabArr.map((item, index) => (
            <NavList current={motherPath === item.pathname} key={`tab${index}`}>
              {item.active && (
                <SLink to={item.pathname}>
                  <h3>{item.text}</h3>
                </SLink>
              )}
            </NavList>
          ))}
        </NavUl>
      </Nav>
      <div>
        <Switch>
          {tabArr.map((item, index) => {
            return (
              item.active && (
                <Route
                  key={index}
                  exact
                  path={item.pathname}
                  component={() => item.component}
                />
              )
            );
          })}
        </Switch>
      </div>
    </Container>
  );
};

type TEventListProps = {
  text: string;
  pathname: string;
  component: React.ReactElement;
  active: boolean;
};

export default Event;
