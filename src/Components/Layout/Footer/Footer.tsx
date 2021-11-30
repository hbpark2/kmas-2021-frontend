import styled from "styled-components";

const Container = styled.footer`
	background-color: ${({ theme: { gray } }) => gray};
	padding: 20px;
`;

const Inner = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	li {
		width: 200px;
		margin: 0 10px;
		img {
			width: 100%;
		}
	}
`;

const Footer = () => {
	return (
		<Container>
			<h2 className="blind">푸터영역</h2>
			<Inner>
				<li>
					<a
						href="https://www.mss.go.kr/site/smba/main.do"
						target="_blank"
						title="링크이동"
						rel="noreferrer"
					>
						<img src="https://thegn.speedgabia.com/kmas-2021/common/gov_logo_layer.png" alt="" />
					</a>
				</li>
				<li>
					<a href="https://www.sbdc.or.kr/" target="_blank" title="링크이동" rel="noreferrer">
						<img src="https://thegn.speedgabia.com/kmas-2021/common/sbdc_logo_layer.png" alt="" />
					</a>
				</li>
				<li>
					<a href="https://www.naver.com/" target="_blank" title="링크이동" rel="noreferrer">
						<img src="https://thegn.speedgabia.com/kmas-2021/common/naver-logo.png" alt="" />
					</a>
				</li>
			</Inner>
		</Container>
	);
};

export default Footer;
