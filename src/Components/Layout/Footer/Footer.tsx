// import styled from "styled-components";

// const Container = styled.footer`
//   background-color: ${({ theme: { gray } }) => gray};
// `;

// const Inner = styled.ul`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px 0;
//   li {
//     width: 340px;
//     margin: 0 10px;
//     a {
//       display: block;
//     }
//     img {
//       display: block;
//       width: 100%;
//     }
//   }
// `;

// const Support = styled.div`
//   background-color: #808080;
//   padding-bottom: 50px;
//   img {
//     display: block;
//     width: 90%;
//     max-width: 845px;
//     margin: 20px auto;
//   }
//   @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
//     padding-bottom: 30px;
//   }
// `;

// const Title = styled.div`
//   display: flex;
//   align-items: center;
//   width: 90%;
//   max-width: 845px;
//   margin: 0 auto;
//   padding: 40px 0 20px;
//   @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
//     padding: 30px 0 10px;
//   }
// `;

// const Span = styled.span`
//   text-align: center;
//   flex: 0.2;
//   font-size: 2.2rem;
//   @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
//     flex: 0.5;
//   }
// `;

// const Line = styled.i`
//   display: block;
//   flex: 1;
//   width: 100%;
//   height: 1px;
//   background-color: #333;
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
//         {/* <li>
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
//         </li> */}
//       </Inner>
//       <Support>
//         <Title>
//           <Line />
//           <Span>후원</Span>
//           <Line />
//         </Title>
//         <img src='https://thegn.speedgabia.com/kmas-2021/common/footer-support.png alt="후원사 목록 이미지" />
//       </Support>
//     </Container>
//   );
// };

// export default Footer;

import styled from "styled-components";

const Container = styled.footer`
  background-color: ${({ theme: { gray } }) => gray};
  padding: 20px;
`;

const Inner = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    width: 200px;
    margin: 0 10px;
    img {
      width: 100%;
    }
  }
`;

const Footer = () => {
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
        <li>
          <h3 className="blind">후원 네이버</h3>
          <a
            href="https://www.naver.com/"
            target="_blank"
            title="링크이동"
            rel="noreferrer"
          >
            <img
              src="https://thegn.speedgabia.com/kmas-2021/common/naver-logo.png"
              alt=""
            />
          </a>
        </li>
      </Inner>
    </Container>
  );
};

export default Footer;
