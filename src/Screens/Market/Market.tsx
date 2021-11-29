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
import MarketDetail from "./components/MarketDetail";
import PwdCheckForm from "./components/PwdCheckForm";

const Container = styled.main``;

const Table = styled.table`
  width: 800px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  border-spacing: 0;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    width: 98%;
    margin: 0 auto;
    th,
    td {
      padding: 2px;
    }
  }
`;

const TableHead = styled.th<{ mobileActive?: boolean }>`
  padding: 10px;
  border: 1px solid #333;
  border-bottom: none;
  word-break: keep-all;
  vertical-align: middle;

  &:first-child {
    width: 60px;
  }
  &:nth-child(2) {
    width: 200px;
  }
  &:nth-child(4) {
    width: 150px;
  }
  &:nth-child(5) {
    width: 120px;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    ${({ mobileActive, theme: { blind } }) => !mobileActive && blind};
  }
`;
const TableDesc = styled(TableHead).attrs({ as: "td" })`
  border-bottom: 1px solid #333;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
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

  return (
    <>
      <Container>
        <h2 className="blind">본문 &#40;참여장터&#41;</h2>
        카테고리
        <select ref={categoryRef}>
          {categoryArr.map((item, index) => (
            <option key={`categoryOption${index}`} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
        <input
          ref={keywordRef}
          type="text"
          placeholder="기업명 또는 프로모션 내용을 입력해주세요."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSearchClick();
            }
          }}
        />
        <button onClick={onSearchClick}>검색</button>
        <Table>
          <caption className="blind">참여장터 현황</caption>
          <thead>
            <tr>
              <TableHead aria-hidden={Utils.isMobile()}>번호</TableHead>
              <TableHead aria-hidden={true} mobileActive={true}>
                기업명
              </TableHead>
              <TableHead aria-hidden={true} mobileActive={true}>
                프로모션 내용
              </TableHead>
              <TableHead aria-hidden={Utils.isMobile()}>기업주소</TableHead>
              <TableHead aria-hidden={Utils.isMobile()}>
                기업 전화번호
              </TableHead>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.results &&
              data.results.length > 0 &&
              data.results.map((market, index) => (
                <TableRow key={market.id} onClick={() => onRowClick(market.id)}>
                  <TableDesc aria-hidden={Utils.isMobile()}>
                    {data.count - ((page - 1) * PAGE_SIZE + index)}
                  </TableDesc>
                  <TableDesc aria-hidden={true} mobileActive={true}>
                    {market.name}
                  </TableDesc>
                  <TableDesc aria-hidden={true} mobileActive={true}>
                    {market.promotion}
                  </TableDesc>
                  <TableDesc aria-hidden={Utils.isMobile()}>
                    {market.road_address}
                  </TableDesc>
                  <TableDesc aria-hidden={Utils.isMobile()}>
                    {market.phone_number}
                  </TableDesc>
                </TableRow>
              ))}
          </tbody>
        </Table>
        <CustomPagination
          page={page}
          page_size={PAGE_SIZE}
          total_count={data?.count || 0}
          on_change={handlePageChange}
        />
        <button onClick={() => history.push("/market/register")}>
          마켓 등록
        </button>
      </Container>
      {modalOpen && marketData && (
        <Modal secondChildren={<PwdCheckForm id={marketData.id} />}>
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
    </>
  );
};

export default Market;
