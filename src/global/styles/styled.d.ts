import "styled-components/native";
import theme from "./theme";

// Curso
declare module "styled-components/native" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}



// Como está na doc do Styled-component:
// declare module "styled-components/native" {
//   export interface DefaultTheme {
//     colors: {
//       black: string;
//       white:string;
//       primary: string;
//       primaryLight: string;
//       secondary: string;
//       success: string;
//       danger: string;
//       dark: string;
//       light: string;
//       gray500: string;
//       gray800: string;
//     };
//   }
// }
