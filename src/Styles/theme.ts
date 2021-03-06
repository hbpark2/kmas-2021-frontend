import { createGlobalStyle, DefaultTheme, keyframes } from "styled-components";
import reset from "styled-reset";

// Media query
const deviceSizes = {
  mobile: 639,
  tablet: 767,
  laptop: 1024,
  normalPC: 1279,
  wide: 1920,
};

const deviceMax = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
  laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
  normalPC: `screen and (max-width: ${deviceSizes.normalPC}px)`,
};

const deviceMin = {
  mobile: `screen and (min-width: ${deviceSizes.mobile + 1}px)`,
  tablet: `screen and (min-width: ${deviceSizes.tablet + 1}px)`,
  laptop: `screen and (min-width: ${deviceSizes.laptop + 1}px)`,
  wide: `screen and (min-width: ${deviceSizes.wide + 1}px)`,
};

export const defaultTheme: DefaultTheme = {
  bgColor1: "#fff",
  bgColor2: "#706260",
  bgColor3: "#9a7951",
  gray: "#dadada",
  deepGreen: "#499a63",
  inputBorderColor: "#a6a6a6",
  tableAccent: "#499a63",
  tableHeader: "rgba(226, 244, 233,0.8)",
  headerDefault: "#0b983a",
  headerActive: "#e73031",
  accentColor: "#0b983a",
  defaultFont: "GmarketSansMedium",
  accentFont: "GmarketSansBold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  fullHeight: window.innerWidth > 639 ? "100vh" : `${window.innerHeight}px`,
  deviceScreenMax: deviceMax,
  deviceScreenMin: deviceMin,
  blind:
    "position: absolute !important; width: 1px !important; height: 1px !important; clip: rect(0 0 0 0) !important; overflow: hidden !important;",
};

//global
export const GlobalStyles = createGlobalStyle`
  ${reset};

  input,
  button {
	padding: 0;
	margin: 0;
	border: 0;
	vertical-align: middle;
	background: none;
	-webkit-appearance: none;
	border: 1px solid #333;
	outline: none;
	box-sizing: border-box;
}

  button{
    border: none;
    cursor:pointer;
  }

  height:100%;
	body, html{
    font-size:62.5%;
    @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile}{
      font-size:50%;
    }
	}

  body{
    background-color:${(props) => props.theme.bgColor1};
		transition: background-color 0.5s;
    font-size:1.6rem;
    height: auto;
    font-family: ${({ theme: { defaultFont } }) => defaultFont};

    @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile}{
      font-size:1.4rem;
      line-height: 1.2em;
    }
	}
  
  main{
    width: auto;
    margin-top:75px;
    min-height: 80vh;
    
    @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop}{
    margin-top: 70px;
    }
  }
  img{
    display:block;
  }
  a {
    text-decoration: none;
    color:inherit;
  }

	.overflow-hidden{
		overflow:hidden;
	}

	.overflow-unset{
		overflow:unset;
	}

	.blind {
		position: absolute;
		width: 1px;
		height: 1px;
		clip: rect(0 0 0 0);
		overflow: hidden;
	}

  /* *:focus{
    border: 5px solid #f00;
  } */

  @font-face {
    font-family: 'GmarketSansMedium';	
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
    font-weight: normal; 		//?????? ?????? ??????
    font-style: normal;
  } 

  @font-face {
    font-family: 'GmarketSansBold';	
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff")
    format("woff");
    font-weight: normal; 		//?????? ?????? ??????
    font-style: normal;
  } 

`;
