import { useContext, useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GET_MARKETS } from "../../Apis/MarketApi";
import Modal from "../../Components/Common/Modal";
import CustomPagination from "../../Components/Common/Pagination";
import { CurrentContext } from "../../Context/ContextStore";
import { useGetMarket } from "../../Hook/useGetMarket";
import { useGetMarkets } from "../../Hook/useGetMarkets";
import Utils from "../../Utils/Utils";
import { categoryArr } from "../MarketForm/marketType";
import FileDownload from "./components/FileDownload";
import MarketDetail from "./components/MarketDetail";
import PwdCheckForm from "./components/PwdCheckForm";

const Container = styled.main``;
const MarketHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 370px;
	background: url("https://thegn.speedgabia.com/kmas-2021/market/market-header-bg.png") no-repeat;
	background-size: cover;

	img {
		height: 380px;
		margin-top: 80px;
	}

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		height: auto;
		img {
			width: 100%;
			height: auto;
			margin-top: 35px;
		}
	}
`;

const MarketSection = styled.article`
	padding-top: 80px;
	background: url("https://thegn.speedgabia.com/kmas-2021/market/market-bg.png") no-repeat;
	background-size: cover;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		padding-top: 60px;
		background: none;
	}
`;

const MarketInner = styled.div`
	max-width: 1100px;
	width: 96%;
	margin: 0 auto;
	padding: 50px;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		padding: 0;
	}
`;

const SearchSection = styled.div`
	display: flex;
	justify-content: space-around;
	height: 75px;
	margin-bottom: 80px;
	font-size: 2.2rem;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		flex-direction: column;
		height: 210px;
		margin-bottom: 60px;
		input,
		select,
		button {
			width: 100%;
			flex: 1;
			margin: 5px 0;
		}
	}
`;

const SelectBox = styled.select`
	border: 2px solid ${({ theme: { deepGreen } }) => deepGreen};
	flex: 1;
	margin-right: 40px;
	font-size: 2.2rem;
	border-radius: 15px;
	text-align: start;
	text-indent: 20px;
	appearance: none;
	background: url("https://thegn.speedgabia.com/kmas-2021/market/select-arrow.png") no-repeat right
		9px center;
	color: #333;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		background-size: 2rem;
	}
`;

const SearchInput = styled.input`
	/* width: 650px; */
	flex: 3;
	margin-right: 40px;
	font-size: 2.2rem;
	text-indent: 20px;
	border-radius: 15px;
	border: 2px solid ${({ theme: { inputBorderColor } }) => inputBorderColor};
	color: #777;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		text-indent: 10px;
	}
`;

const SearchSubmit = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-size: 2.2rem;
	border-radius: 15px;
	background-color: ${({ theme: { headerDefault } }) => headerDefault};
	color: #fff;
	border: none;
	img {
		margin-right: 15px;
		margin-bottom: 5px;
	}
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		font-size: 2.6rem !important;
	}
`;

const TableWrap = styled.div`
	margin: 0 auto;
	border: 1px solid ${({ theme: { inputBorderColor } }) => inputBorderColor};
	border-radius: 20px;
	overflow: hidden;
`;
const Table = styled.table`
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	text-align: center;
	border-spacing: 0;
	border-radius: 5px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		th,
		td {
			padding: 2px;
		}
	}
`;

const TableHead = styled.th<{ mobileActive?: boolean }>`
	border-bottom: 1px solid ${({ theme: { gray } }) => gray};
	word-break: keep-all;
	vertical-align: middle;
	height: 55px;
	background-color: ${({ theme: { tableHeader } }) => tableHeader};
	border-left: none;
	border-right: none;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-size: 2rem;

	&:first-child {
		width: 60px;
	}
	&:nth-child(2) {
		width: 200px;
	}
	&:nth-child(4) {
		width: 230px;
	}
	&:nth-child(5) {
		width: 170px;
	}
	//

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		${({ mobileActive, theme: { blind } }) => !mobileActive && blind};
		font-size: 2rem;
		height: 40px;

		&:nth-child(2) {
			width: 30%;
		}
		&:nth-child(3) {
			width: 70%;
		}
	}
`;

const TableDesc = styled(TableHead).attrs({ as: "td" })`
	font-size: 1.8rem;

	background-color: transparent;
	font-family: ${({ theme: { defaultFont } }) => defaultFont};
`;

const TableRow = styled.tr`
	cursor: pointer;
	&:last-child {
		td {
			border-bottom: none;
		}
	}

	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.laptop} {
		&:hover {
			background-color: ${({ theme: { tableHeader } }) => tableHeader};
		}
	}
`;

const DisableRow = styled.tr`
	td {
		padding: 50px 0;
	}
`;

export const RequestButton = styled.button`
	display: block;
	margin: 50px auto;
	border: none;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		margin: 25px auto;
		img {
			width: 80%;
		}
	}
`;

const PromotionSection = styled.article``;
const PromotionBanner = styled.img`
	display: block;
	margin: 0 auto 80px;
	max-width: 1330px;
	width: 100%;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		width: 96%;
		margin-bottom: 20px;
	}
`;

const KeyVisual = styled.img`
	display: block;
	margin: 0 auto;
	box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.3), -3px -3px 12px rgba(0, 0, 0, 0.3);
	max-width: 1330px;
	width: 90%;
`;

const DownloadWrap = styled.div`
	display: flex;
	max-width: 1230px;
	width: 100%;
	margin: 0 auto;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		width: 90%;
		flex-direction: column;
		margin: 20px auto;
	}
`;

const DownloadButton = styled.button`
	display: block;
	width: 48%;
	max-width: 820px;
	margin: 50px auto;
	img {
		width: 100%;
	}
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		margin: 5px auto;
		width: 90%;
	}
`;

const NoteWrap = styled.article`
	dl {
		width: 90%;
		max-width: 900px;
		background-color: ${({ theme: { tableHeader } }) => tableHeader};
		padding: 20px 30px;
		margin: 20px auto;
	}
	dt {
		font-size: 2.2rem;
		display: flex;
		align-items: center;
		font-family: ${({ theme: { accentFont } }) => accentFont};
		margin-bottom: 20px;
		h4 {
			margin-top: 4px;
			margin-left: 15px;
		}
	}

	li {
		font-size: 2rem;
		color: #a6a6a6;
		list-style: disc;
		margin: 10px 0;
		margin-left: 55px;
	}
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
		dt {
			margin-bottom: 10px;
		}
		dl {
			padding: 20px 12px;
		}

		li {
			width: 90%;
			margin-left: 30px;
			word-break: break-all;
			line-height: 1.4em;
		}
	}
`;

const PAGE_SIZE = 5;
const Market = () => {
	const keywordRef = useRef(null);
	const categoryRef = useRef(null);
	const queryClient = useQueryClient();
	const history = useHistory();

	const { modalOpen, setModalOpen } = useContext(CurrentContext);
	const [page, setPage] = useState(1);
	const [keyword, setKeyword] = useState("");

	const [category, setCategory] = useState(0);
	const [marketId, setMarketId] = useState<number | undefined>();
	const [fileModal, setFileModal] = useState<{ modalState?: boolean; fileType?: string }>({
		modalState: false,
		fileType: "",
	});

	const { data: marketData } = useGetMarket(marketId);

	const handlePageChange = (page: number) => {
		setPage(page);
	};

	const { data, isLoading, isError } = useGetMarkets({
		page,
		page_size: PAGE_SIZE,
		keyword,
		category,
	});

	// Prefetch the next page!
	useEffect(() => {
		if (data?.hasMore) {
			queryClient.prefetchQuery(["GET_MARKETS", page + 1], () =>
				GET_MARKETS({ page: page + 1, page_size: PAGE_SIZE, keyword, category })
			);
		}
	}, [data, page, keyword, category, queryClient]);

	const onRowClick = (id: number) => {
		setFileModal({ modalState: false, fileType: "" });
		setMarketId(id);
		setModalOpen(true);
	};

	const onSearchClick = () => {
		if (keywordRef && keywordRef.current) {
			setKeyword(keywordRef.current["value"]);
		}
		if (categoryRef && categoryRef.current) {
			setCategory(categoryRef.current["value"]);
			setPage(1);
		}
	};

	const onFileModal = (fileType: string) => {
		setFileModal({ modalState: true, fileType: fileType });
		setModalOpen(true);
	};

	return (
		<>
			<Container>
				<h2 className="blind">본문 &#40;참여장터&#41;</h2>
				<MarketHeader>
					<img
						src={
							Utils.isMobile()
								? "https://thegn.speedgabia.com/kmas-2021/market/mo-market-header.png"
								: "https://thegn.speedgabia.com/kmas-2021/market/market-header.png"
						}
						alt=""
					/>
				</MarketHeader>
				<MarketSection>
					<MarketInner>
						<SearchSection>
							<SelectBox ref={categoryRef}>
								<option disabled>카테고리</option>
								{categoryArr.map((item, index) => (
									<option key={`categoryOption${index}`} value={item.value}>
										{item.text}
									</option>
								))}
							</SelectBox>
							<SearchInput
								ref={keywordRef}
								type="text"
								placeholder="검색어를 입력하세요."
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										onSearchClick();
									}
								}}
							/>
							<SearchSubmit onClick={onSearchClick}>
								<img
									src="https://thegn.speedgabia.com/kmas-2021/market/search-icon.png"
									alt="검색아이콘"
								/>
								검색
							</SearchSubmit>
						</SearchSection>
						<TableWrap>
							<Table>
								<caption className="blind">참여장터 현황</caption>
								<thead>
									<tr>
										<TableHead aria-hidden={!Utils.isMobile() || false}>번호</TableHead>
										<TableHead aria-hidden={true} mobileActive={true}>
											기업명
										</TableHead>
										<TableHead aria-hidden={true} mobileActive={true}>
											프로모션 내용
										</TableHead>
										<TableHead aria-hidden={!Utils.isMobile()}>기업주소</TableHead>
										<TableHead aria-hidden={!Utils.isMobile()}>기업 전화번호</TableHead>
									</tr>
								</thead>
								<tbody>
									{data && data.results && data.results.length > 0 ? (
										data.results.map((market, index) => (
											<TableRow key={market.id} onClick={() => onRowClick(market.id)}>
												<TableDesc aria-hidden={!Utils.isMobile()}>
													{data.count - ((page - 1) * PAGE_SIZE + index)}
												</TableDesc>
												<TableDesc aria-hidden={true} mobileActive={true}>
													{Utils.isMobile()
														? market.name && market.name.length > 6
															? `${market.name.substr(0, 6)}...`
															: market.name
														: market.name && market.name.length > 10
														? `${market.name.substr(0, 10)}...`
														: market.name}
												</TableDesc>
												<TableDesc aria-hidden={true} mobileActive={true}>
													{Utils.isMobile()
														? market.promotion && market.promotion.length > 17
															? `${market.promotion.substr(0, 17)}...`
															: market.promotion
														: market.promotion && market.promotion.length > 25
														? `${market.promotion.substr(0, 25)}...`
														: market.promotion}
												</TableDesc>
												<TableDesc aria-hidden={!Utils.isMobile()}>
													{market.road_address && market.road_address.length > 10
														? `${market.road_address.substr(0, 10)}...`
														: market.road_address}
												</TableDesc>
												<TableDesc aria-hidden={!Utils.isMobile()}>{market.phone_number}</TableDesc>
											</TableRow>
										))
									) : (
										<DisableRow>
											<td colSpan={5}>데이터가 없습니다.</td>
										</DisableRow>
									)}
								</tbody>
							</Table>
						</TableWrap>

						{data && data.results && data.results.length > 0 && (
							<CustomPagination
								page={page}
								page_size={PAGE_SIZE}
								total_count={data?.count || 0}
								on_change={handlePageChange}
							/>
						)}

						<RequestButton onClick={() => history.push("/market/register")}>
							<img
								src="https://thegn.speedgabia.com/kmas-2021/market/market-join-btn.png"
								alt="신청하기 버튼"
							></img>
						</RequestButton>
					</MarketInner>
				</MarketSection>
				<PromotionSection>
					<PromotionBanner
						src="https://thegn.speedgabia.com/kmas-2021/market/market-banner.png"
						alt="홍보물다운받기배너"
					/>
					<KeyVisual
						src="https://thegn.speedgabia.com/kmas-2021/market/market-keyvisual.png"
						alt="키비주얼"
					/>
					<DownloadWrap>
						<DownloadButton type="button" onClick={() => onFileModal("origin")}>
							<span className="blind">2021 K-MAS 라이브마켓 홍보물 다운받기</span>
							<img
								src="https://thegn.speedgabia.com/kmas-2021/market/mo-download-promotion-origin.png"
								alt="홍보물다운받기 버튼"
							/>
						</DownloadButton>
						<DownloadButton type="button" onClick={() => onFileModal("poster")}>
							<span className="blind">2021 K-MAS 라이브마켓 홍보물 다운받기</span>

							<img
								src="https://thegn.speedgabia.com/kmas-2021/market/mo-download-promotion-poster.png"
								alt="홍보물다운받기 버튼"
							/>
						</DownloadButton>
					</DownloadWrap>
				</PromotionSection>

				<NoteWrap>
					<dl>
						<dt>
							<img
								src="https://thegn.speedgabia.com/kmas-2021/market/snow-circle.png"
								alt="눈 장식"
							/>
							<h4>광고물 활용 범위</h4>
						</dt>
						<dd>
							<ul>
								<li>
									K-MAS 라이브마켓 참가 중,소상공인 오프라인 포스터, 현수막 등의 오프라인 광고등
								</li>
								<li>K-MAS 라이브마켓 참가 중,소상공인 온라인 광고물(웹배너, 웹포스터 등)</li>
							</ul>
						</dd>
					</dl>
					<dl>
						<dt>
							<img
								src="https://thegn.speedgabia.com/kmas-2021/market/snow-circle.png"
								alt="눈 장식"
							/>
							<h4>주의사항</h4>
						</dt>
						<dd>
							<ul>
								<li>
									광고물은 K-MAS 라이브마켓 기간(12/18 ~ 12/26)에만 사용 가능하며 행사 기간 후에는
									회수 부탁드립니다.
								</li>
								<li>
									위 사항을 위반하거나 불이행 하는 경우 법적 조치가 이루어지므로 주의가 필요합니다.
								</li>
							</ul>
						</dd>
					</dl>
				</NoteWrap>
			</Container>

			{modalOpen && marketData && !fileModal.modalState && (
				<Modal
					secondChildren={<PwdCheckForm id={marketData.id} />}
					width={Utils.isMobile() ? "90%" : "500px"}
					secondWidth="300px"
					secondHeight="150px"
				>
					<MarketDetail
						image={marketData.image}
						name={marketData.name}
						hompage_link={marketData.hompage_link}
						phone_number={marketData.phone_number}
						road_address={marketData.road_address}
						detail_address={marketData.detail_address}
						zonecode={marketData.zonecode}
						items={marketData.items}
						promotion={marketData.promotion}
						exhibition_link={marketData.exhibition_link}
					/>
				</Modal>
			)}

			{modalOpen && fileModal.modalState && (
				<Modal width="300px" height="150px" center={true}>
					<FileDownload fileType={fileModal.fileType} />
				</Modal>
			)}
		</>
	);
};

export default Market;
