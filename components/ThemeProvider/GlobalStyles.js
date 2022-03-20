import { createGlobalStyle } from "styled-components";
import css from "@styled-system/css";
import { media } from "styled-bootstrap-grid";

/* Creating a very basic Design Theme */

const GlobalStyles = createGlobalStyle`
  body {
    ${css({
      margin: 0,
      fontFamily: "secondary",
      fontSize: "mini",
      lineHeight: "mini",
      backgroundColor: "primary_500",
      color: "text",
    })}
  }

  ${media.md`
    body {
      ${css({
        fontSize: "middle",
        lineHeight: "middle",
      })}
  `}
`;

export default GlobalStyles;
