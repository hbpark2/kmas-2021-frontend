import { useContext, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { GET_MARKETS, IGetMarkets } from "../../Apis/marketApi";
import Modal from "../../Components/Common/Modal";
import CustomPagination from "../../Components/Common/Pagination";
import { CurrentContext } from "../../Context/ContextStore";
import { useGetMarket } from "../../Hook/useGetMarket";
import MarketDetail from "./components/MarketDetail";
import PwdCheckForm from "./components/PwdCheckForm";

const Container = styled.main``;

const Table = styled.table`
  width: 800px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  border-spacing: 0;

  td,
  th {
    padding: 10px;
    border: 1px solid #333;
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
  }
`;
const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const PAGE_SIZE = 2;
const Market = () => {
  const queryClient = useQueryClient();
  const { modalOpen, setModalOpen, setSecondModalOpen } =
    useContext(CurrentContext);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const [category, setCategory] = useState(0);
  const [marketId, setMarketId] = useState<number | null>(null);

  const { data: marketData } = useGetMarket(marketId);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const { data, isLoading, isError } = useQuery<IGetMarkets>(
    ["GET_MARKETS", page],
    () => GET_MARKETS({ page, page_size: PAGE_SIZE, keyword, category })
  );

  const onRowClick = (id: number) => {
    setMarketId(id);
    setModalOpen(true);
  };

  // Prefetch the next page!
  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(["GET_MARKETS", page + 1], () =>
        GET_MARKETS({ page: page + 1, page_size: PAGE_SIZE, keyword, category })
      );
    }
  }, [data, page, keyword, category, queryClient]);

  return (
    <Container>
      <h2 className="blind">본문 &#40;참여장터&#41;</h2>

      <Table>
        <caption>전 세계 웹 브라우저 점유율</caption>

        <thead>
          <tr>
            <th>번호</th>
            <th>기업명</th>
            <th>프로모션 내용</th>
            <th>기업주소</th>
            <th>기업 전화번호</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.results &&
            data.results.length > 0 &&
            data.results.map((market, index) => (
              <TableRow key={market.id} onClick={() => onRowClick(market.id)}>
                <td>{data.count - ((page - 1) * PAGE_SIZE + index)}</td>
                <td>{market.name}</td>
                <td>{market.promotion}</td>
                <td>{market.road_address}</td>
                <td>{market.phone_number}</td>
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

      {modalOpen && marketData && (
        <Modal secondChildren={<PwdCheckForm />}>
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
    </Container>
  );
};

export default Market;
