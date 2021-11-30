import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import styled from "styled-components";
import Utils from "../../../Utils/Utils";
import TitleImg from "../../../Assets/market/market-detail-header.png";
const Container = styled.article`
	width: 96%;
	max-width: 460px;
	margin: 0 auto;
	padding: 10px 0;
`;

const Header = styled.h2`
	padding: 20px 0;
	img {
		display: block;
		margin: 0 auto;
	}
`;

const MarketDetail: React.FC<IMarketDetailProps> = ({
	image,
	name,
	hompage_link,
	phone_number,
	road_address,
	detail_address,
	zonecode,
	items,
	promotion,
	exhibition_link,
}) => {
	const { setSecondModalOpen } = useContext(CurrentContext);

	return (
		<Container>
			<Header>
				<span className="blind">k-mas 참여업체</span>
				<img src={TitleImg} alt="k-mas 참여업체" />
			</Header>
			{image && <img src={image} alt={name} style={{ width: 300, height: 300 }} />}
			<div>
				<dl>
					<dt>기업명</dt>
					<dd>{name}</dd>
				</dl>
				<dl>
					<dt>홈페이지</dt>
					<dd>{Utils.addHttpHttps(hompage_link)}</dd>
				</dl>
				<dl>
					<dt>기업 전화번호</dt>
					<dd>{phone_number}</dd>
				</dl>
				<dl>
					<dt>기업주소</dt>
					<dd>{`${road_address} ${detail_address} (${zonecode})`}</dd>
				</dl>
				<dl>
					<dt>주요 판매품목</dt>
					<dd>{items}</dd>
				</dl>
				<dl>
					<dt>프로모션 내용</dt>
					<dd>{promotion}</dd>
				</dl>
				<dl>
					<dt>기획전 링크</dt>
					<dd>{Utils.addHttpHttps(exhibition_link)}</dd>
				</dl>
			</div>
			<button onClick={() => setSecondModalOpen(true)}>수정</button>
		</Container>
	);
};

interface IMarketDetailProps {
	image: string | null;
	name: string;
	hompage_link: string;
	phone_number: string;
	road_address: string;
	detail_address: string;
	zonecode: string;
	items: string;
	promotion: string;
	exhibition_link: string | null;
}

export default MarketDetail;
