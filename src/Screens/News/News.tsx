import { useState } from "react";
import { useGetNewsList } from "../../Hook/useGetNews";

const PAGE_SIZE = 2;
const News = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetNewsList({
    page,
    page_size: PAGE_SIZE,
  });
  console.log(data);

  return <div></div>;
};

export default News;
