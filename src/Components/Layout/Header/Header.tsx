import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	background-color: #fff;
	z-index: 100;
`;

const Nav = styled.nav`
	position: relative;
	display: flex;
	/* width: 80%; */
	height: 100%;
	margin: 0 auto;
	margin-left: 50px;
`;

const NavUl = styled.ul`
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	max-width: 1280px;
	margin-left: 100px;
`;

const NavList = styled.li<{ current?: boolean | any }>`
	height: 100%;
	cursor: pointer;
	/* margin: 0 50px; */

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
`;

const SLink = styled(Link)``;

const HeaderDecoration = styled.div`
	img {
		display: block;
		width: 100%;
		max-width: 1920px;
		margin: 0 auto;
	}
`;

const LogoWrap = styled(Link)`
	display: flex;
	align-items: center;
`;

const Header = () => {
	const location = useLocation();
	return (
		<Container>
			<h1 className="blind">K-MAS</h1>
			<Nav>
				<h2 className="blind">네비게이션</h2>

				<LogoWrap to="/">
					<img
						src="https://thegn.speedgabia.com/kmas-2021/common/kmas-logo.png"
						alt="k--mas 로고"
					/>
				</LogoWrap>

				<NavUl>
					<NavList current={location.pathname === "/"}>
						<SLink to="/">
							<h3>K-mas</h3>
						</SLink>
					</NavList>
					<NavList current={location.pathname === "/event"}>
						<SLink to="/event">
							<h3>이벤트</h3>
						</SLink>
					</NavList>
					<NavList current={location.pathname === "/exhibition"}>
						<SLink to="/exhibition">
							<h3>판매 기획전</h3>
						</SLink>
					</NavList>
					<NavList current={location.pathname === "/live"}>
						<SLink to="/live">
							<h3>라이브커머스</h3>
						</SLink>
					</NavList>
					<NavList current={location.pathname === "/news"}>
						<SLink to="/news">
							<h3>마켓뉴스</h3>
						</SLink>
					</NavList>
					<NavList current={location.pathname === "/market"}>
						<SLink to="/market">
							<h3>참여장터</h3>
						</SLink>
					</NavList>
				</NavUl>
			</Nav>
			{location.pathname === "/" && (
				<HeaderDecoration>
					<img
						src="https://thegn.speedgabia.com/kmas-2021/common/header-bottom.png"
						alt="헤더장식이미지"
					/>
				</HeaderDecoration>
			)}
		</Container>
	);
};

export default Header;
