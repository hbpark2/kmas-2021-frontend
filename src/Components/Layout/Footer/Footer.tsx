import { useLocation } from "react-router";
import styled, { css } from "styled-components";
import { supportArr } from "./suppportData";

const Container = styled.footer`
  background-color: ${({ theme: { gray } }) => gray};
`;

const Inner = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  li {
    width: 340px;
    margin: 0 10px;
    a {
      display: block;
    }
    img {
      display: block;
      width: 100%;
    }
  }
`;

const Support = styled.div`
  /* background-color: #808080; */
  padding-bottom: 50px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    padding-bottom: 30px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 845px;
  margin: 0 auto;
  padding: 40px 0 20px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    padding: 0px 0 10px;
  }
`;

const Span = styled.span`
  text-align: center;
  flex: 0.2;
  font-size: 2.2rem;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    flex: 0.5;
  }
`;

const Line = styled.i`
  display: block;
  flex: 1;
  width: 100%;
  height: 1px;
  background-color: #333;
`;

const SupportWrap = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 30px; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  max-width: 845px;
  margin: 0 auto;
`;

const SuportItem = styled.li<{
  margin?: number;
  marginDisable?: boolean;
  custom?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex: 1;

  a,
  img {
    display: block;
  }

  a {
    padding: ${({ margin }) => `0 ${margin}%`};
    img {
      width: 100%;
      ${({ custom }) =>
        custom &&
        css`
          position: relative;
          left: 20px;
        `}
    }
  }

  &:first-child {
    justify-content: flex-start;
    a {
      padding-left: 0;
    }
  }

  &:last-child {
    justify-content: flex-end;
    a {
      padding-right: 0;
    }
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
    margin: 4px 0;
    a {
      padding: 0 10%;
      img {
        position: static;
        width: 100%;
        height: auto;
        margin-bottom: 0;
        max-height: 15px;
      }
    }
  }
`;

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/event/quiz") {
    return <div />;
  }
  return (
    <Container>
      <h2 className="blind">푸터</h2>
      <Inner>
        <li>
          <h3 className="blind">중소벤처기업부</h3>
          <a
            href="https://www.mss.go.kr/site/smba/main.do"
            target="_blank"
            title="링크이동"
            rel="noreferrer"
          >
            <img
              src="https://thegn.speedgabia.com/kmas-2021/common/gov_logo_layer.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <h3 className="blind">중소기업유통센터</h3>
          <a
            href="https://www.sbdc.or.kr/"
            target="_blank"
            title="링크이동"
            rel="noreferrer"
          >
            <img
              src="https://thegn.speedgabia.com/kmas-2021/common/sbdc_logo_layer.png"
              alt=""
            />
          </a>
        </li>
      </Inner>
      <Support>
        <Title>
          <Line />
          <Span>후원</Span>
          <Line />
        </Title>

        {supportArr.map((item, index) => {
          let marginValue = 0;
          switch (index) {
            case 0:
              marginValue = 9;
              break;
            case 1:
              marginValue = 12;
              break;
            case 2:
              marginValue = 16;
              break;
            case 3:
              marginValue = 9;
              break;

            default:
              break;
          }

          return (
            <SupportWrap key={`row${index}`}>
              {item.map((row, idx) => {
                return (
                  <SuportItem
                    key={`supportItem${idx}`}
                    margin={marginValue}
                    custom={row.text === "인터파크"}
                  >
                    <a
                      href={row.link}
                      target="_blank"
                      title={`${row.text} 바로가기`}
                      rel="noreferrer"
                    >
                      <img src={row.url} alt={row.text} />
                    </a>
                  </SuportItem>
                );
              })}
            </SupportWrap>
          );
        })}
      </Support>
    </Container>
  );
};

export default Footer;

// import styled from "styled-components";

// const Container = styled.footer`
//   background-color: ${({ theme: { gray } }) => gray};
//   padding: 20px;
// `;

// const Inner = styled.ul`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   li {
//     width: 200px;
//     margin: 0 10px;
//     img {
//       width: 100%;
//     }
//   }
// `;

// const Footer = () => {
//   return (
//     <Container>
//       <h2 className="blind">푸터</h2>
//       <Inner>
//         <li>
//           <h3 className="blind">중소벤처기업부</h3>
//           <a
//             href="https://www.mss.go.kr/site/smba/main.do"
//             target="_blank"
//             title="링크이동"
//             rel="noreferrer"
//           >
//             <img
//               src="https://thegn.speedgabia.com/kmas-2021/common/gov_logo_layer.png"
//               alt=""
//             />
//           </a>
//         </li>
//         <li>
//           <h3 className="blind">중소기업유통센터</h3>
//           <a
//             href="https://www.sbdc.or.kr/"
//             target="_blank"
//             title="링크이동"
//             rel="noreferrer"
//           >
//             <img
//               src="https://thegn.speedgabia.com/kmas-2021/common/sbdc_logo_layer.png"
//               alt=""
//             />
//           </a>
//         </li>
//         <li>
//           <h3 className="blind">후원 네이버</h3>
//           <a
//             href="https://www.naver.com/"
//             target="_blank"
//             title="링크이동"
//             rel="noreferrer"
//           >
//             <img
//               src="https://thegn.speedgabia.com/kmas-2021/common/naver-logo.png"
//               alt=""
//             />
//           </a>
//         </li>
//       </Inner>
//     </Container>
//   );
// };

// export default Footer;
