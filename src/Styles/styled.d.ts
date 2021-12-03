import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor1: string;
    bgColor2: string;
    bgColor3: string;
    gray: string;
    deepGreen: string;
    inputBorderColor: string;
    tableAccent: string;
    tableHeader: string;
    headerDefault: string;
    headerActive: string;
    defaultFont: string;
    accentFont: string;
    accentColor: string;
    fullHeight: string;
    textShadow: string;
    deviceScreenMax: {
      [T in "mobile" | "tablet" | "laptop" | "normalPC"]: string;
    };
    deviceScreenMin: { [T in "mobile" | "tablet" | "laptop" | "wide"]: string };
    blind: string;
  }
}
