import styled from "styled-components";
import analytics from "../../../../../analytics";
import DownloadImage1 from "../../../../../Assets/download-image-1.png";
import DownloadImage2 from "../../../../../Assets/download-image-2.png";
import DownloadImage3 from "../../../../../Assets/download-image-3.png";
import DownloadImage4 from "../../../../../Assets/download-image-4.png";
const Container = styled.div`
  width: 100%;
  img {
    display: block;
  }
`;
const Header = styled.div`
  width: 100%;
  margin-top: -5px;
  img {
    width: 100%;
  }
`;

const Content = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 30px 20px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    margin: 15px 10px;
  }
`;

const DownloadItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    img {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  display: block;
  margin: 10px auto 15px;
  img {
    width: 100%;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    margin: 5px auto 10px;

    img {
      display: block;
      width: 85%;
      margin: 0 auto;
    }
  }
`;

const Footer = styled.div`
  width: 100%;
  background-color: #085a32;
  img {
    width: 100%;
    /* margin-bottom: -10px; */
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    margin-bottom: -20px;
  }
`;

const ImageDownload = () => {
  const downloadClick = (type: 1 | 2 | 3 | 4) => {
    // * GA 설정
    analytics.sendEvent({
      category: "퀴즈 이벤트 이미지 다운로드",
      action: "퀴즈 이벤트 이미지 다운로드 클릭",
      label: `퀴즈 이벤트 이미지 ${type}`,
    });

    const name =
      type === 1
        ? "quiz_001"
        : type === 2
        ? "quiz_003"
        : type === 3
        ? "quiz_004"
        : "quiz_002";

    fetch(
      `https://kmas2021.s3.ap-northeast-2.amazonaws.com/media/event/quiz/${name}.png`
    )
      .then((res) => res.blob())
      .then((blob) => {
        let dName =
          type === 1
            ? "quiz_001"
            : type === 2
            ? "quiz_002"
            : type === 3
            ? "quiz_003"
            : "quiz_004";

        let objectURL = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = objectURL;
        link.download = dName;
        document.body.appendChild(link);
        link.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
        document.body.removeChild(link);
      });
  };
  return (
    <Container>
      <Header>
        <img
          src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-header.png"
          alt="이미지 공유하기 헤더"
        />
      </Header>

      <Content>
        <DownloadItem>
          <img
            src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-1.png"
            alt="이미지 1"
          />
          <Button onClick={() => downloadClick(1)}>
            <img
              src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-button.png"
              alt="이미지 1 다운로드"
            />
          </Button>
        </DownloadItem>
        <DownloadItem>
          <img
            src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-2.png"
            alt="이미지 2"
          />
          <Button onClick={() => downloadClick(2)}>
            <img
              src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-button.png"
              alt="이미지 2 다운로드"
            />
          </Button>
        </DownloadItem>
        <DownloadItem>
          <img
            src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-3.png"
            alt="이미지 3"
          />
          <Button onClick={() => downloadClick(3)}>
            <img
              src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-button.png"
              alt="이미지 3 다운로드"
            />
          </Button>
        </DownloadItem>
        <DownloadItem>
          <img
            src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-4.png"
            alt="이미지 4"
          />
          <Button onClick={() => downloadClick(4)}>
            <img
              src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-button.png"
              alt="이미지 4 다운로드"
            />
          </Button>
        </DownloadItem>
      </Content>
      <Footer>
        <img
          src="https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/image-download-footer.png"
          alt="이미지 공유하기 푸터"
        />
      </Footer>
    </Container>
  );
};

export default ImageDownload;
