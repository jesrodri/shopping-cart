import styled from "styled-components";
import theme from "../theme";

const Text = styled.text`
  display: block;
  margin-block-end: ${({ theme }) => theme.space[4]};
  line-height: ${({ theme }) => theme.space[5]};
  text-align: ${(props) => props.align};
  font-size: ${({ theme }) => theme.fontSizes.variant};
`

export default Text;
