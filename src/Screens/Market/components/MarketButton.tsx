import styled from "styled-components";

const Button = styled.button`
	display: block;
	width: 220px;
	height: 60px;
	margin: 0 auto;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-size: 1.6em;
	color: ${({ theme: { headerDefault } }) => headerDefault};
	border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
	border-radius: 15px;
	background-color: ${({ theme: { tableHeader } }) => tableHeader};
`;

interface MarketButtonProps {
	text: string;
	onClickFn?: () => void;
}

const MarketButton: React.FC<MarketButtonProps> = ({ text, onClickFn }) => {
	return (
		<Button type="button" onClick={onClickFn}>
			{text}
		</Button>
	);
};

export default MarketButton;
