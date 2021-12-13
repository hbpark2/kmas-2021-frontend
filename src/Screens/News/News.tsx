import Utils from "../../Utils/Utils";
import NewsList from "./components/NewsList";
import { Container, MarketHeader } from "./styles";

const News = () => {
  const isMobile = Utils.isMobile();

  return (
    <Container>
      <h2 className="blind">K-MAS 참여장터</h2>
      <MarketHeader>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/news/news-header.png"
              : "https://thegn.speedgabia.com/kmas-2021/news/news-header.png"
          }
          alt=""
        />
      </MarketHeader>
      <NewsList />
    </Container>
  );
};

export default News;
