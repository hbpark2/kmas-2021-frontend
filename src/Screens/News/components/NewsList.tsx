import styled from "styled-components";
import { useState } from "react";
import { useGetNewsList } from "../../../Hook/useGetNewsList";
import Utils from "../../../Utils/Utils";
import CustomPagination from "../../../Components/Common/Pagination";

const Container = styled.div`
  margin-top: 180px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: 100px;
  }
`;
const NewsListWrap = styled.div`
  position: relative;
  background-color: #efefef;

  max-width: 1260px;
  margin: 225px auto 0;
  padding: 120px 0;
  .pagination {
    margin-top: 45px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-top: 0;
    padding: 40px 0 30px;
    .pagination {
      margin-top: 25px;
    }
  }
`;
const NewsListHeader = styled.div`
  img {
    position: absolute;
    display: block;
    margin: 0 auto;
    left: 50%;
    top: -195px;
    transform: translateX(-50%);
    width: 90%;
    max-width: 880px;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    img {
      top: -75px;
    }
  }
`;
const SLink = styled.a`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 15px;

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    display: block;
    width: 92%;
    height: 1px;
    margin: 0 auto;
    background-color: #302828;
    opacity: 0.1;
  }
  &:last-child::after {
    background-color: inherit;
  }
  @media screen and (min-width: 1280px) {
    /* width: 740px; */
    width: 1100px;
    &::after {
      width: 1000px;
      left: 47.5%;
    }
  }
`;

const Info = styled.div`
  width: 240px;
  .description {
    display: none;
  }
  .title {
    line-height: 1.3em;
    font-size: 14.5px;
    font-weight: 700;
    font-family: ${({ theme: { accentFont } }) => accentFont};
    /* color: ${({ theme: { accentColor } }) => accentColor}; */
    margin-bottom: 10px;
  }

  .description {
    width: 97%;
    font-size: 13px;
    line-height: 19px;
    color: #333;
    margin-bottom: 10px;
    font-family: ${({ theme: { defaultFont } }) => defaultFont};
  }

  div {
    display: flex;
    width: 96%;
    justify-content: flex-start;
    margin-top: 17px;
  }
  span {
    font-size: 12px;
  }

  .origin {
    color: #b7b7b7;
  }

  .middle {
    margin: 0 8px;
  }

  .date {
    color: ${({ theme: { headerDefault } }) => headerDefault};
    font-family: ${({ theme }) => theme.accentFont};
  }

  @media screen and (min-width: 768px) {
    width: 800px;
    span {
      font-size: 15px;
    }
    .description {
      display: block;
    }
    .title {
      width: 96%;

      font-size: 18px;
    }
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  img.thumb {
    width: 75px;
    height: 75px;
    border-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    width: 235px;
    img.thumb {
      width: 150px;
      height: 110px;
    }
  }
`;

const PAGE_SIZE = 10;
const NewsList = () => {
  const [page, setPage] = useState(1);
  const {
    data: newsData,
    isLoading,
    isError,
  } = useGetNewsList({
    page,
    page_size: PAGE_SIZE,
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <NewsListWrap>
        <NewsListHeader>
          <img
            src="https://thegn.speedgabia.com/kmas-2021/news/news-list-header.png"
            alt="크리스마스 마켓 관련기사"
          />
        </NewsListHeader>
        {newsData &&
          newsData.count > 0 &&
          newsData.results.map((news, index) => (
            <SLink
              key={index}
              href={news.link}
              target="_blank"
              rel="noreferrer"
            >
              <Info>
                <h4 className="title">{news.title ? news.title : ""}</h4>
                <p className="description">
                  {news.description ? news.description : ""}
                </p>
                <div className="etc">
                  <span className="origin">{news.press ? news.press : ""}</span>
                  {news.press && <span className="middle">·</span>}
                  <span className="date">
                    {news.date ? Utils.toStringDateFormat(news.date, ".") : ""}
                  </span>
                </div>
              </Info>
              <Image>
                {news.image && (
                  <img
                    src={news.image}
                    width="55"
                    height="55"
                    alt="뉴스 이미지"
                    className="thumb"
                  />
                )}
              </Image>
            </SLink>
          ))}
        {newsData && newsData.results && newsData.results.length > 0 && (
          <CustomPagination
            page={page}
            page_size={PAGE_SIZE}
            total_count={newsData?.count || 0}
            on_change={handlePageChange}
          />
        )}
      </NewsListWrap>
    </Container>
  );
};

export default NewsList;
