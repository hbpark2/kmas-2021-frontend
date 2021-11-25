import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import Utils from "../../../Utils/Utils";

const MarketDetail: React.FC<IMarketDetailProps> = ({
  image,
  name,
  hompage_link,
  phone_number,
  road_address,
  detail_address,
  zonecode,
  items,
  promotion,
  exhibition_link,
}) => {
  const { setSecondModalOpen } = useContext(CurrentContext);

  return (
    <div>
      {image && (
        <img src={image} alt={name} style={{ width: 300, height: 300 }} />
      )}
      <div>
        <dl>
          <dt>기업명</dt>
          <dd>{name}</dd>
        </dl>
        <dl>
          <dt>홈페이지</dt>
          <dd>{Utils.addHttpHttps(hompage_link)}</dd>
        </dl>
        <dl>
          <dt>기업 전화번호</dt>
          <dd>{phone_number}</dd>
        </dl>
        <dl>
          <dt>기업주소</dt>
          <dd>{`${road_address} ${detail_address} (${zonecode})`}</dd>
        </dl>
        <dl>
          <dt>주요 판매품목</dt>
          <dd>{items}</dd>
        </dl>
        <dl>
          <dt>프로모션 내용</dt>
          <dd>{promotion}</dd>
        </dl>
        <dl>
          <dt>기획전 링크</dt>
          <dd>{Utils.addHttpHttps(exhibition_link)}</dd>
        </dl>
      </div>
      <button onClick={() => setSecondModalOpen(true)}>수정</button>
    </div>
  );
};

interface IMarketDetailProps {
  image: string | null;
  name: string;
  hompage_link: string;
  phone_number: string;
  road_address: string;
  detail_address: string;
  zonecode: string;
  items: string;
  promotion: string;
  exhibition_link: string | null;
}

export default MarketDetail;
