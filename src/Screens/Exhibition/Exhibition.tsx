import ExhibitionList from "./components/ExhibitionList";
import { Container, MarketHeader } from "./styles";

const Exhibition = () => {
  return (
    <Container>
      <h2 className="blind">K-MAS 참여장터</h2>
      <MarketHeader>
        <img
          src="https://thegn.speedgabia.com/kmas-2021/sale/sale-banner.png"
          alt=""
        />
      </MarketHeader>

      <ExhibitionList />
    </Container>
  );
};

export default Exhibition;
