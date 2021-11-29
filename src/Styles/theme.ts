import { createGlobalStyle, DefaultTheme, keyframes } from "styled-components";
import reset from "styled-reset";

// Media query
const deviceSizes = {
	mobile: 639,
	tablet: 767,
	laptop: 1023,
	wide: 1920,
};

const deviceMax = {
	mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
	tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
	laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
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
	accentColor: "#e4cbac",
	accentFont: '"Cormorant Garamond", "Nanum Myeongjo", serif',
	textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
	fullHeight: window.innerWidth > 639 ? "100vh" : `${window.innerHeight}px`,
	deviceScreenMax: deviceMax,
	deviceScreenMin: deviceMin,
	blind: "position: absolute; width: 1px; height: 1px; clip: rect(0 0 0 0); overflow: hidden;",
};

//global
export const GlobalStyles = createGlobalStyle`
  ${reset};

	body, html{
		height:100%;
    font-size:62.5%;
    @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile}{
      font-size:50%;
    }
	}

  body{
    background-color:${(props) => props.theme.bgColor1};
		transition: background-color 0.5s;
    font-size:1.6rem;
    /* line-height: 1.4em; */
    @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile}{
      font-size:1.4rem;
      line-height: 1.2em;
    }
	}

  main{
    width: auto;
    margin-top:100px;
    padding-top: 100px;
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
`;
