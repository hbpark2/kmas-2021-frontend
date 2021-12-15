import { useContext } from "react";
import Modal from "../../Components/Common/Modal";
import { CurrentContext } from "../../Context/ContextStore";
import Utils from "../../Utils/Utils";
import NewsList from "./components/NewsList";
import TimeTable from "./components/TimeTable";
import { Container, MarketHeader, NewsBanner } from "./styles";

const News = () => {
  const isMobile = Utils.isMobile();
  const { modalOpen, setModalOpen } = useContext(CurrentContext);

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

      {/* <NewsBanner onClick={() => setModalOpen(true)}>뉴스배너</NewsBanner>
      {modalOpen && (
        <Modal
          width={isMobile ? "92%" : "600px"}
          height={isMobile ? "450px" : "760px"}
        >
          <TimeTable />
        </Modal>
      )} */}
    </Container>
  );
};

export default News;
