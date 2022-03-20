import { createGlobalStyle } from "styled-components";
import css from "@styled-system/css";
import { media } from "styled-bootstrap-grid";

const GlobalStyles = createGlobalStyle`
  body {
    ${css({
      margin: 0,
      fontFamily: "secondary",
      fontSize: "mini",
      lineHeight: "mini",
      backgroundColor: "generic_100",
      color: "text",
    })}
  }

  p {
    ${css({
      fontSize: "middle",
      lineHeight: "middle",
    })}
  }

  a {
    ${css({
      color: "primary_700",
    })}
  }

  a:hover{
    text-decoration: none;
  }

  h1, h2, h3, h4, p, a {
    ${css({
      fontFamily: "primary",
      fontWeight: "regular",
      letterSpacing: "-0.3px",
      color: "text",
    })}
  }

  h1 {
    ${css({
      fontSize: "xlarge",
      lineHeight: "xlarge",
    })}
  }

  h2 {
    ${css({
      fontSize: "large",
      lineHeight: "large",
    })}
  }

  h3 {
    ${css({
      fontSize: "middle",
      lineHeight: "middle",
    })}
  }

  h4 {
    ${css({
      fontSize: "middle",
      lineHeight: "middle",
    })}
  }

  ${media.md`
    body {
      ${css({
        fontSize: "middle",
        lineHeight: "middle",
      })}
    }

    h1 {
      ${css({
        fontSize: "xxlarge",
        lineHeight: "xxlarge",
      })}
    }

    h2 {
      ${css({
        fontSize: "xlarge",
        lineHeight: "xlarge",
      })}
    }

    h3 {
      ${css({
        fontSize: "large",
        lineHeight: "large",
      })}
    }

    h4 {
      ${css({
        fontSize: "middle",
        lineHeight: "middle",
      })}
    }
  `}
`;

export default GlobalStyles;
