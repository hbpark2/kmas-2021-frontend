import styled from "styled-components";
import Utils from "../../../Utils/Utils";
import {
  quizGift1,
  quizGift2,
  quizGift3,
  quizGift4,
  quizGift5,
  quizGift6,
  quizGift7,
  quizGift8,
  quizGift9,
} from "./quiz_winner_data";

const Top = styled.div`
  img {
    width: 100%;
  }
`;

const Bottom = styled.div`
  background-color: #a82a38;
  background-image: url(https://thegn.speedgabia.com/kmas-2021/event/event-bg-snow.png);
  background-size: cover;
  padding: 120px 0 160px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 25px;
    background-image: none;
    padding-bottom: 50px;
  }
`;
const BottomHeader = styled.div`
  img {
    margin: 0 auto;
    max-width: 925px;
    width: 80%;
  }
`;

const BottomInner = styled.div`
  max-width: 1130px;
  width: 90%;
  padding: 50px 0;
  margin: 0 auto;
  background-color: #f4ead5;
  border-radius: 15px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 35px 0;
  }
`;

const Note = styled.div`
  img {
    margin: 0 auto;
    max-width: 950px;
    width: 90%;
  }
`;

const BottomTitle = styled.div`
  margin: 75px 0;
  img {
    margin: 0 auto;
    max-width: 1050px;
    width: 96%;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin: 30px 0;
  }
`;

const GiftTopWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  max-width: 1050px;
  width: 94%;
  margin: 0 auto 70px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    gap: 5px;
    margin-bottom: 35px;
  }
`;

const GiftTopItem = styled.div`
  img {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  span {
    display: block;
    text-align: center;
    margin-bottom: 10px;
    font-size: 20px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    img {
      margin-bottom: 20px;
    }
    span {
      margin-bottom: 5px;
      font-size: 12px;
    }
  }
`;

const GiftBottomWrap = styled.div<{ isLast?: boolean }>`
  max-width: 995px;
  width: 90%;
  margin: 0 auto 55px;
  padding: 40px 0 65px;
  background-color: #d1b2a3;
  border-radius: 15px;
  margin-bottom: ${({ isLast }) => (isLast ? "30px" : "55px")};

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 94%;
    padding: 20px 0 15px;
    margin-bottom: ${({ isLast }) => (isLast ? "20px" : "25px")};
  }
`;

const GiftBottomItem = styled.div`
  img {
    width: 368px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
    max-width: 875px;
    margin: 0 auto;
    li {
      display: block;
      text-align: center;
      margin-bottom: 10px;
    }
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    img {
      width: 50%;
      max-width: 230px;
      margin-bottom: 30px;
    }
    ul {
      grid-template-columns: repeat(3, 1fr);
      width: 98%;
      li {
        margin-bottom: 5px;
      }
    }
  }
`;

const LinkButton = styled.a`
  display: block;
  width: 530px;
  margin: 0 auto;

  img {
    width: 100%;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 70%;
    max-width: 400px;
  }
`;

const Quiz = () => {
  const isMobile = Utils.isMobile();

  return (
    <>
      <Top>
        <img
          src={
            isMobile
              ? "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-1-top-mo.png"
              : "https://thegn.speedgabia.com/kmas-2021/event/online-1-quiz/event-online-1-top.png"
          }
          alt="당첨자발표"
        />
      </Top>
      <Bottom>
        <BottomHeader>
          <img
            src="https://thegn.speedgabia.com/kmas-2021/winner/congratuations.png"
            alt="당첨을 축하드립니다."
          />
        </BottomHeader>
        <BottomInner>
          <Note>
            <img
              src={
                isMobile
                  ? "https://thegn.speedgabia.com/kmas-2021/winner/prized_quiz_note_mo.png"
                  : "https://thegn.speedgabia.com/kmas-2021/winner/prized_quiz_note.png"
              }
              alt="유의사항"
            />
          </Note>
          <BottomTitle>
            <img
              src={
                isMobile
                  ? "https://thegn.speedgabia.com/kmas-2021/winner/prized_quiz_text_mo.png"
                  : "https://thegn.speedgabia.com/kmas-2021/winner/prized_quiz_text.png"
              }
              alt="당첨자발표"
            />
          </BottomTitle>
          <GiftTopWrap>
            <GiftTopItem>
              <img
                src={isMobile ? quizGift1.mo_img : quizGift1.pc_img}
                alt=""
              />
              {quizGift1.winner.map((item, index) => (
                <span key={`gift${index}`}>{item}</span>
              ))}
            </GiftTopItem>
            <GiftTopItem>
              <img
                src={isMobile ? quizGift2.mo_img : quizGift2.pc_img}
                alt=""
              />
              {quizGift2.winner.map((item, index) => (
                <span key={`gift${index}`}>{item}</span>
              ))}
            </GiftTopItem>
            <GiftTopItem>
              <img
                src={isMobile ? quizGift3.mo_img : quizGift3.pc_img}
                alt=""
              />
              {quizGift3.winner.map((item, index) => (
                <span key={`gift${index}`}>{item}</span>
              ))}
            </GiftTopItem>
            <GiftTopItem>
              <img
                src={isMobile ? quizGift4.mo_img : quizGift4.pc_img}
                alt=""
              />
              {quizGift4.winner.map((item, index) => (
                <span key={`gift${index}`}>{item}</span>
              ))}
            </GiftTopItem>
            <GiftTopItem>
              <img
                src={isMobile ? quizGift5.mo_img : quizGift5.pc_img}
                alt=""
              />
              {quizGift5.winner.map((item, index) => (
                <span key={`gift${index}`}>{item}</span>
              ))}
            </GiftTopItem>

            <GiftTopItem>
              <img
                src={isMobile ? quizGift6.mo_img : quizGift6.pc_img}
                alt=""
              />
              {quizGift6.winner.map((item, index) => (
                <span key={`gift${index}`}>{item}</span>
              ))}
            </GiftTopItem>
          </GiftTopWrap>
          <GiftBottomWrap>
            <GiftBottomItem>
              <img
                src={isMobile ? quizGift7.mo_img : quizGift7.pc_img}
                alt=""
              />
              <ul>
                {quizGift7.winner.map((item, index) => (
                  <li key={`gift${index}`}>{item}</li>
                ))}
              </ul>
            </GiftBottomItem>
          </GiftBottomWrap>
          <GiftBottomWrap>
            <GiftBottomItem>
              <img
                src={isMobile ? quizGift8.mo_img : quizGift8.pc_img}
                alt=""
              />
              <ul>
                {quizGift8.winner.map((item, index) => (
                  <li key={`gift${index}`}>{item}</li>
                ))}
              </ul>
            </GiftBottomItem>
          </GiftBottomWrap>
          <GiftBottomWrap isLast={true}>
            <GiftBottomItem>
              <img
                src={isMobile ? quizGift9.mo_img : quizGift9.pc_img}
                alt=""
              />
              <ul>
                {quizGift9.winner.map((item, index) => (
                  <li key={`gift${index}`}>{item}</li>
                ))}
              </ul>
            </GiftBottomItem>
          </GiftBottomWrap>
          <LinkButton
            href="http://naver.me/GDbQSAdD"
            target="_blank"
            rel="noreferrer"
            title="네이버폼이동"
          >
            <img
              src="https://thegn.speedgabia.com/kmas-2021/winner/prized-link-button.png"
              alt="개인정보입력버튼"
            />
          </LinkButton>
        </BottomInner>
      </Bottom>
    </>
  );
};
export default Quiz;
