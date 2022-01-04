import {
  Container,
  KeyVisualWrap,
  KeyVisual,
  SnowSection,
  CardWrap,
  Card,
  BannerWrap,
} from "./styles";

import Utils from "../../Utils/Utils";
import SwiperSection from "./components/SwiperSection";
import analytics from "../../analytics";
import { useContext, useEffect, useState } from "react";
import Modal from "../../Components/Common/Modal";
import Winner from "./components/Winner";
import NewWindow from "rc-new-window";
import { CurrentContext } from "../../Context/ContextStore";
import { useLocation } from "react-router-dom";

const Home = () => {
  const isMobile = Utils.isMobile();
  const location = useLocation();
  const { modalOpen, setModalOpen } = useContext(CurrentContext);

  const goToLink = (url: string, type: string) => {
    if (url) {
      if (type === "메인 VR 배너") {
        // * GA 설정
        analytics.sendEvent({
          category: "배너",
          action: "배너 클릭",
          label: type,
        });
        window.open(url);
      } else {
        alert("마감되었습니다");
      }
    } else {
      alert("준비중입니다");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setModalOpen(true);
    }
    return () => {
      setModalOpen(false);
    };
  }, []);

  return (
    <>
      <Container>
        <h2 className="blind">K-MAS 메인페이지</h2>

        <KeyVisualWrap>
          <h3 className="blind">K-MAS 키비주얼</h3>

          <KeyVisual
            src={
              isMobile
                ? "https://thegn.speedgabia.com/kmas-2021/main/mo-main.png"
                : "https://thegn.speedgabia.com/kmas-2021/main/main.png"
            }
            alt="키비주얼"
          />
        </KeyVisualWrap>
        <SnowSection>
          <CardWrap>
            <h3 className="blind">K-MAS 행사정보</h3>
            {isMobile ? (
              <Card
                src="https://thegn.speedgabia.com/kmas-2021/main/mo-card.png"
                alt="card"
              />
            ) : (
              <Card
                src="https://thegn.speedgabia.com/kmas-2021/main/main-card.png"
                alt="card"
              />
            )}
          </CardWrap>

          <BannerWrap>
            <h3 className="blind">K-MAS 행사배너</h3>

            <button
              onClick={() =>
                goToLink("https://sbdcmarket.co.kr/", "메인 소원 배너")
              }
            >
              <img
                src="https://thegn.speedgabia.com/kmas-2021/main/pc-wish-banner.png"
                alt="WishBanner"
              />
            </button>

            <button
              onClick={() =>
                goToLink(
                  "https://nollaplace.com/2021_K_MAS_Live_Market/",
                  "메인 VR 배너"
                )
              }
            >
              <img
                src="https://thegn.speedgabia.com/kmas-2021/main/pc-vr-banner.png"
                alt="VRBanner"
              />
            </button>

            <button
              onClick={() =>
                goToLink(
                  "https://blog.naver.com/zeropay_official/222597142788",
                  "제로페이 배너"
                )
              }
            >
              <img
                src="https://thegn.speedgabia.com/kmas-2021/main/pc-zero-banner.png"
                alt="VRBanner"
              />
            </button>
            <button
              onClick={() =>
                goToLink("http://m.site.naver.com/0QWuP", "정책퀴즈 배너")
              }
            >
              <img
                src="https://thegn.speedgabia.com/kmas-2021/main/pc-quiz-banner.png"
                alt="VRBanner"
              />
            </button>
          </BannerWrap>
          <SwiperSection />
        </SnowSection>
      </Container>
      {modalOpen && (
        <Modal
          width={isMobile ? "320px" : "500px"}
          height={isMobile ? "320px" : "500px"}
          isDownload
          isCloseVisible
        >
          <Winner />
        </Modal>
      )}

      {/* {event1Pop && (
        <NewWindow
          onClose={() => setEvent1Pop(false)}
          initPopupInnerRect={() => {
            return {
              left: window.screen.width,
              top: 0,
              width: 500,
              height: 500,
            };
          }}
        >
          <Winner />
        </NewWindow>
      )} */}
    </>
  );
};

export default Home;
