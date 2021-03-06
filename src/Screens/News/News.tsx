import { useContext } from "react";
import Modal from "../../Components/Common/Modal";
import { CurrentContext } from "../../Context/ContextStore";
import Utils from "../../Utils/Utils";
import NewsList from "./components/NewsList";
import NewsSwiper from "./components/NewsSwiper";
import TimeTable from "./components/TimeTable";
import { Container, MarketHeader, NewsBanner } from "./styles";

const News = () => {
  const isMobile = Utils.isMobile();
  const { modalOpen, setModalOpen } = useContext(CurrentContext);

  return (
    <Container>
      <h2 className="blind">K-MAS 뉴스</h2>
      <MarketHeader>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/news/news-header.png"
              : "https://thegn.speedgabia.com/kmas-2021/news/news-header.png"
          }
          alt="헤더"
        />
      </MarketHeader>

      <NewsSwiper />

      <NewsList />

      <NewsBanner onClick={() => setModalOpen(true)} aria-haspopup="true">
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/news/concert-banner.png"
              : "https://thegn.speedgabia.com/kmas-2021/news/concert-banner.png"
          }
          alt="콘서트 배너"
        />
      </NewsBanner>
      {modalOpen && (
        <Modal
          // width={isMobile ? "92%" : "900px"}
          width={window.innerWidth > 900 ? "900px" : "92%"}
          height={window.innerHeight > 900 ? "870px" : "450px"}
          isConcert={true}
          center={window.innerHeight > 900 ? true : false}
        >
          <TimeTable />
        </Modal>
      )}
    </Container>
  );
};

export default News;
