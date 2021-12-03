import { useState } from "react";
import styled from "styled-components";
import analytics from "../../../analytics";
import Utils from "../../../Utils/Utils";
import { arrData } from "./exhibitionData";

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
    name,
    startDate,
    endDate,
    active,
    link,
    alertMessage,
  }: {
    name: string;
    startDate: string;
    endDate: string;
    active: boolean;
    link: string | null;
    alertMessage?: string;
  }) => {
    if (active) {
      if (Utils.betweenDate(startDate, endDate) && link) {
        // * GA 설정
        analytics.sendEvent({
          category: "기획전",
          action: "기획전 클릭",
          label: name,
        });
        window.open(link, "_blank");
      } else if (Utils.closeDate(endDate)) {
        alert("마감되었습니다");
      } else {
        if (alertMessage) {
          alert(alertMessage);
        } else {
          alert("12월 오픈 예정");
        }
      }
    } else {
      if (alertMessage) {
        alert(alertMessage);
      } else {
        alert("12월 오픈 예정");
      }
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
    <Grid>
      {arrData.map((item) => {
        return (
          <ExhibitionItem key={item.name}>
            <button
              onClick={() =>
                onExhibitionClick({
                  name: item.name,
                  startDate: item.startDate,
                  endDate: item.endDate,
                  active: item.active,
                  link: item.link,
                  alertMessage: item.alertMessage,
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
  );
};

export default ExhibitionList;
