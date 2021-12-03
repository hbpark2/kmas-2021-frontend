import { useState } from "react";
import styled from "styled-components";
import Utils from "../../../Utils/Utils";
import { liveArray, onlineArray } from "./exhibitionData";

const Grid = styled.div`
  display: grid;
  /* grid-auto-rows: 290px; */
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media screen and (min-width: 1280px) {
    width: 1100px;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

const ExhibitionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  img {
    display: block;
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    /* height: 330px; */
  }
  @media screen and (min-width: 1280px) {
    height: 216px;
  }
`;

const ExhibitionList = () => {
  const [tab, setTab] = useState<"online" | "live">("online");

  const onExhibitionClick = ({
    startDate,
    endDate,
    active,
    link,
  }: {
    startDate: string;
    endDate: string;
    active: boolean;
    link: string | null;
  }) => {
    if (active) {
      if (Utils.betweenDate(startDate, endDate) && link) {
        window.open(link, "_blank");
      } else if (Utils.closeDate(endDate)) {
        alert("마감되었습니다");
      } else {
        alert("12월 오픈 예정");
      }
    } else {
      alert("12월 오픈 예정");
    }
  };

  const exhibitionImageCreator = ({
    name,
    moImage,
    pcImage,
  }: {
    name: string;
    moImage: string | null;
    pcImage: string | null;
  }) => {
    const isMobile = Utils.isMobile();
    if (moImage && pcImage) {
      return <img src={isMobile ? moImage : pcImage} alt="기획전 이미지" />;
    } else {
      return <p>{name}</p>;
    }
  };

  return (
    <div>
      <button onClick={() => setTab("online")}>온라인 이벤트</button>
      <button onClick={() => setTab("live")}>라이브 커머스</button>
      <Grid>
        {(tab === "online" ? onlineArray : liveArray).map((item) => {
          return (
            <ExhibitionItem key={item.name}>
              <button
                onClick={() =>
                  onExhibitionClick({
                    active: item.active,
                    link: item.link,
                    startDate: item.startDate,
                    endDate: item.endDate,
                  })
                }
              >
                {exhibitionImageCreator({
                  name: item.name,
                  moImage: item.moImage,
                  pcImage: item.pcImage,
                })}
              </button>
            </ExhibitionItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default ExhibitionList;
