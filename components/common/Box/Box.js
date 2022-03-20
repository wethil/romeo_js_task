/* Styled Div component as Box  */

import styled from "styled-components";
import propTypes from "@styled-system/prop-types";

import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  textAlign,
} from "styled-system";

const Box = styled.div`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${textAlign}
`;

Box.propTypes = {
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.textAlign,
};

Box.displayName = "Box";

export default Box;

export const Flex = styled(Box)``;

Flex.propTypes = Box.propTypes;

Flex.defaultProps = {
  display: "flex",
};
