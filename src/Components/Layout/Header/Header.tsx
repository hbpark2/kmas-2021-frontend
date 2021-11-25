import { Link } from "react-router-dom";
import styled from "styled-components";
import GovLogo from "../../../Assets/gov_logo_layer.png";
import SBDCLogo from "../../../Assets/sbdc_logo_layer.png";

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
	width: 80%;
	height: 100%;
	margin: 0 auto;
`;

const NavUl = styled.ul`
	margin: 0 auto;
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
	height: 100%;
	max-width: 1280px;
`;

const NavList = styled.li`
	height: 100%;
	cursor: pointer;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		text-align: center;
	}
	img {
		width: 100%;
	}
`;

const SLink = styled(Link)``;

const Decorataion = styled.div`
	position: absolute;
	top: 100px;
	left: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	height: 40px;
	overflow: hidden;
`;

const Circle = styled.i<{ bgColor: string }>`
	position: relative;
	top: -40px;
	display: block;
	width: 80px;
	height: 80px;
	background-color: ${({ bgColor }) => bgColor};
	border-radius: 50%;
`;

const Header = () => {
	const CircleArr = [
		"#040",
		"#040",
		"#050",
		"#050",
		"#050",
		"#060",
		"#060",
		"#060",
		"#060",
		"#060",
		"#050",
		"#050",
		"#050",
		"#050",
		"#040",
		"#040",
	];

	return (
		<Container>
			<h1 className="blind">K-MAS</h1>
			<Nav>
				<h2 className="blind">네비게이션</h2>
				<NavUl>
					<NavList>
						<Link to="/">
							<img src={GovLogo} alt="중소벤처기업부 로고" />
						</Link>
					</NavList>
					<NavList>
						<SLink to="/">
							<h3>K-mas</h3>
						</SLink>
					</NavList>
					<NavList>
						<SLink to="/intro">
							<h3>캠페인 소개</h3>
						</SLink>
					</NavList>
					<NavList>
						<SLink to="/event">
							<h3>이벤트</h3>
						</SLink>
					</NavList>
					<NavList>
						<SLink to="/exhibition">
							<h3>판매 기획전</h3>
						</SLink>
					</NavList>
					<NavList>
						<SLink to="/live">
							<h3>라이브커머스</h3>
						</SLink>
					</NavList>
					<NavList>
						<SLink to="/news">
							<h3>마켓뉴스</h3>
						</SLink>
					</NavList>
					<NavList>
						<SLink to="/market">
							<h3>참여장터</h3>
						</SLink>
					</NavList>
					<NavList>
						<a
							href="https://www.mss.go.kr/site/smba/main.do"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={GovLogo} alt="중소벤처기업부 로고" />
						</a>
					</NavList>
				</NavUl>
			</Nav>
			{/* <Decorataion>
				{CircleArr.map((item, index) => (
					<Circle bgColor={item} key={`circle${index}`} />
				))}
			</Decorataion> */}
		</Container>
	);
};

export default Header;
