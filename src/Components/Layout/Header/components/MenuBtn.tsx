import { useContext } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../../../Context/ContextStore";

const Container = styled.button`
	display: none;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		position: fixed;
		top: 16.5px;
		right: 22.5px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 35px;
		height: 35px;
		/* z-index: 10; */
	}
`;
const MenuBar = styled.i<{ bg?: string }>`
	display: block;
	width: 100%;
	height: 4px;
	background-color: ${({ bg }) => bg};
	border-radius: 5px; ;
`;

const MenuBtn = () => {
	const { menuOpen, setMenuOpen } = useContext(CurrentContext);

	return (
		<Container onClick={() => setMenuOpen(!menuOpen)}>
			<MenuBar bg="#0b983a" />
			<MenuBar bg="#e73031" />
			<MenuBar bg="#0b983a" />
		</Container>
	);
};

export default MenuBtn;
