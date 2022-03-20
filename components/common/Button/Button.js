/* Styled Button component   */

import styled from "styled-components";
import { layout, variant } from "styled-system";
import css from "@styled-system/css";

const variants = {
  link: {
    color: "white",
    fontSize: "middle",
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
    ":hover:enabled": {
      color: "info_100",
    },
    ":focus": {
      color: "white",
      borderColor: "primary_800",
      borderWidth: "1px",
    },
  },
};

const Button = styled.button`
  ${variant({
    variants,
  })}
  ${css({
    padding: "0 24px",
    lineHeight: "40px",
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",
    display: "block",
    textTransform: "uppercase",
    width: "fit-content",
  })}
  ${layout}
  ${({ active }) =>
    active &&
    `
    color: black;
  `}
`;

export default Button;
