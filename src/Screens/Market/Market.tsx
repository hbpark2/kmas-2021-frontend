import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { GET_MARKETS, IGetMarkets } from "../../Apis/marketApi";

const Container = styled.main``;
const PAGE_SIZE = 2;
const Market = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(0);

  const { data, isLoading, isError } = useQuery<IGetMarkets>(
    ["GET_MARKETS", page],
    () => GET_MARKETS({ page, page_size: PAGE_SIZE, keyword, category })
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(["GET_MARKETS", page + 1], () =>
        GET_MARKETS({ page: page + 1, page_size: PAGE_SIZE, keyword, category })
      );
    }
  }, [data, page, keyword, category, queryClient]);

  return (
    <Container style={{ marginTop: 100 }}>
      <h2 className="blind">본문 &#40;참여장터&#41;</h2>
      {data &&
        data.results &&
        data.results.length > 0 &&
        data.results.map((market) => (
          <div key={market.id} style={{ marginBottom: 10 }}>
            <p>기업명: {market.name}</p>
            <p>프로모션 내용: {market.promotion}</p>
            <p>기업주소: {market.road_address}</p>
            <p>기업 전화번호: {market.phone_number}</p>
          </div>
        ))}
    </Container>
  );
};

export default Market;
