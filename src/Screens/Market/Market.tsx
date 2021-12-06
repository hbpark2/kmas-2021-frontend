import { useContext, useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import Modal from "../../Components/Common/Modal";
import CustomPagination from "../../Components/Common/Pagination";
import Spinner from "../../Components/Common/Spinner";
import { CurrentContext } from "../../Context/ContextStore";
import { useGetMarket } from "../../Hook/useGetMarket";
import { useGetMarkets } from "../../Hook/useGetMarkets";
import Utils from "../../Utils/Utils";
import { categoryArr } from "../MarketForm/marketType";
import FileDownload from "./components/FileDownload";
import MarketDetail from "./components/MarketDetail";
import PwdCheckForm from "./components/PwdCheckForm";
import {
  Container,
  MarketHeader,
  MarketSection,
  MarketInner,
  SearchSection,
  SelectBox,
  SearchInput,
  SearchSubmit,
  TableWrap,
  Table,
  TableHead,
  TableDesc,
  TableRow,
  DisableRow,
  PromotionSection,
  PromotionBanner,
  KeyVisual,
  DownloadWrap,
  DownloadButton,
  NoteWrap,
  RequestButton,
} from "./styles";

const PAGE_SIZE = 5;
const Market = () => {
  const isMobile = Utils.isMobile();
  const keywordRef = useRef(null);
  const categoryRef = useRef(null);
  const queryClient = useQueryClient();
  const history = useHistory();

  const { modalOpen, setModalOpen } = useContext(CurrentContext);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const [category, setCategory] = useState(0);
  const [marketId, setMarketId] = useState<number | undefined>();
  const [fileModal, setFileModal] = useState<{
    modalState?: boolean;
    fileType?: string;
  }>({
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
  // useEffect(() => {
  // 	if (data?.hasMore) {
  // 		queryClient.prefetchQuery(["GET_MARKETS", page + 1], () =>
  // 			GET_MARKETS({ page: page + 1, page_size: PAGE_SIZE, keyword, category })
  // 		);
  // 	}
  // }, [data, page, keyword, category, queryClient]);

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
        <h2 className="blind">K-MAS 참여장터</h2>
        <MarketHeader>
          <img
            src={
              isMobile
                ? "https://thegn.speedgabia.com/kmas-2021/market/mo-market-header.png"
                : "https://thegn.speedgabia.com/kmas-2021/market/market-header.png"
            }
            alt=""
          />
        </MarketHeader>

        <MarketSection>
          <MarketInner>
            <SearchSection>
              <h3 className="blind">K-MAS 참여업체 검색</h3>

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
              <h3 className="blind">K-MAS 참여업체 테이블</h3>

              <Table>
                <caption className="blind">참여장터 현황</caption>
                <thead>
                  <tr>
                    <TableHead aria-hidden={!isMobile || false}>번호</TableHead>
                    <TableHead aria-hidden={true} mobileActive={true}>
                      기업명
                    </TableHead>
                    <TableHead aria-hidden={true} mobileActive={true}>
                      프로모션 내용
                    </TableHead>
                    <TableHead aria-hidden={!isMobile}>기업주소</TableHead>
                    <TableHead aria-hidden={!isMobile}>기업 전화번호</TableHead>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && (
                    <DisableRow>
                      <td colSpan={5}>
                        <Spinner />
                      </td>
                    </DisableRow>
                  )}

                  {!isLoading && !data && (
                    <DisableRow>
                      <td colSpan={5}>데이터가 없습니다.</td>
                    </DisableRow>
                  )}

                  {data &&
                    data.results &&
                    data.results.length > 0 &&
                    data.results.map((market, index) => (
                      <TableRow
                        key={market.id}
                        onClick={() => onRowClick(market.id)}
                        tabIndex={0}
                      >
                        <TableDesc aria-hidden={!isMobile}>
                          {data.count - ((page - 1) * PAGE_SIZE + index)}
                        </TableDesc>
                        <TableDesc aria-hidden={true} mobileActive={true}>
                          {isMobile
                            ? market.name && market.name.length > 6
                              ? `${market.name.substr(0, 6)}...`
                              : market.name
                            : market.name && market.name.length > 10
                            ? `${market.name.substr(0, 10)}...`
                            : market.name}
                        </TableDesc>
                        <TableDesc aria-hidden={true} mobileActive={true}>
                          {isMobile
                            ? market.promotion && market.promotion.length > 17
                              ? `${market.promotion.substr(0, 17)}...`
                              : market.promotion
                            : market.promotion && market.promotion.length > 25
                            ? `${market.promotion.substr(0, 25)}...`
                            : market.promotion}
                        </TableDesc>
                        <TableDesc aria-hidden={!isMobile}>
                          {market.road_address &&
                          market.road_address.length > 10
                            ? `${market.road_address.substr(0, 10)}...`
                            : market.road_address}
                        </TableDesc>
                        <TableDesc aria-hidden={!isMobile}>
                          {market.phone_number}
                        </TableDesc>
                      </TableRow>
                    ))}
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
          <h3 className="blind">K-MAS 홍보물 다운받기</h3>

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
              <span className="blind">
                2021 K-MAS 라이브마켓 홍보물 다운받기
              </span>
              <img
                src="https://thegn.speedgabia.com/kmas-2021/market/mo-download-promotion-origin.png"
                alt="홍보물다운받기 버튼"
              />
            </DownloadButton>
            <DownloadButton type="button" onClick={() => onFileModal("poster")}>
              <span className="blind">
                2021 K-MAS 라이브마켓 홍보물 다운받기
              </span>

              <img
                src="https://thegn.speedgabia.com/kmas-2021/market/mo-download-promotion-poster.png"
                alt="홍보물다운받기 버튼"
              />
            </DownloadButton>
          </DownloadWrap>

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
                    K-MAS 라이브마켓 참가 중,소상공인 오프라인 포스터, 현수막
                    등의 오프라인 광고등
                  </li>
                  <li>
                    K-MAS 라이브마켓 참가 중,소상공인 온라인 광고물(웹배너,
                    웹포스터 등)
                  </li>
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
                    광고물은 K-MAS 라이브마켓 기간(12/18 ~ 12/26)에만 사용
                    가능하며 행사 기간 후에는 회수 부탁드립니다.
                  </li>
                  <li>
                    위 사항을 위반하거나 불이행 하는 경우 법적 조치가
                    이루어지므로 주의가 필요합니다.
                  </li>
                </ul>
              </dd>
            </dl>
          </NoteWrap>
        </PromotionSection>
      </Container>

      {modalOpen && marketData && !fileModal.modalState && (
        <Modal
          secondChildren={<PwdCheckForm id={marketData.id} />}
          width={isMobile ? "90%" : "500px"}
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
