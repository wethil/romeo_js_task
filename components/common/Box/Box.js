import styled from "styled-components";
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

Box.displayName = "Box";

export default Box;

export const Flex = styled(Box)``;

Flex.propTypes = Box.propTypes;

Flex.defaultProps = {
  display: "flex",
};
