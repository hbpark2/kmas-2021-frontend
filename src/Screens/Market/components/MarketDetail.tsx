import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import styled from "styled-components";
import Utils from "../../../Utils/Utils";
import MarketButton from "./MarketButton";

const Container = styled.article`
	width: 90%;
	max-width: 460px;
	margin: 0 auto;
`;

const Header = styled.h2`
	margin-bottom: 20px;
	img {
		display: block;
		margin: 0 auto;
	}
`;

const MarketImage = styled.img`
	width: 100%;
	max-width: 460px;
`;

const DetailWrap = styled.div`
	margin: 20px 0;
	border: 2px solid ${({ theme: { gray } }) => gray};
	border-radius: 20px;
	overflow: hidden;
	dl {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid ${({ theme: { gray } }) => gray};
		&:last-child {
			border: none;
		}
	}

	dt,
	dd {
		display: flex;
		justify-content: center;
		align-items: center;
		word-break: break-all;
		min-height: 60px;
		line-height: 1.2em;
	}
	dt {
		width: 30%;
		background-color: ${({ theme: { tableHeader } }) => tableHeader};
	}
	dd {
		width: 70%;
		justify-content: flex-start;
		padding: 0 20px;
	}
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		font-size: 2rem;
		dt {
			width: 40%;
			padding: 5px 0;
		}
		dd {
			overflow-y: scroll;
			padding: 5px 20px;
		}
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
				<img
					src="https://thegn.speedgabia.com/kmas-2021/market/market-detail-header.png"
					alt="k-mas 참여업체"
				/>
			</Header>

			{image ? (
				<MarketImage src={image} alt={name} />
			) : (
				<MarketImage
					src="https://thegn.speedgabia.com/kmas-2021/market/market-keyvisual.png"
					alt="기본이미지"
				/>
			)}

			<DetailWrap>
				<dl>
					<dt>기업명</dt>
					<dd>{name}</dd>
				</dl>
				<dl>
					<dt>홈페이지</dt>
					<dd>
						<a
							href={Utils.addHttpHttps(hompage_link)}
							target="_blank"
							title="기업홈페이지링크"
							rel="noreferrer"
						>
							{Utils.addHttpHttps(hompage_link)}
						</a>
					</dd>
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
					<dd>
						<a
							href={Utils.addHttpHttps(exhibition_link)}
							target="_blank"
							title="기업홈페이지링크"
							rel="noreferrer"
						>
							{Utils.addHttpHttps(exhibition_link)}
						</a>
					</dd>
				</dl>
			</DetailWrap>
			<MarketButton onClickFn={() => setSecondModalOpen(true)} text="수정" />
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
