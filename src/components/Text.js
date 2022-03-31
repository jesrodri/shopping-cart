import styled from "styled-components";

const align = ({ align }) => {
  switch (align) {
    case 'center':
      return 'center';
    case 'left':
      return 'left';
    case 'right':
      return 'right';
    default:
      return 'left';
  }
}

const fontSize = ({ variant, theme }) => {
  switch (variant) {
    case 'h1':
      return theme.fontSizes[12];
    case 'h2':
      return theme.fontSizes[9];
    case 'h3':
      return theme.fontSizes[8];
    case 'body2':
      return theme.fontSizes[5];
    default:
      return theme.fontSizes[6];
  }    
}  

const Text = styled.text`
  display: block;
  margin-block-end: ${({ theme }) => theme.space[4]};
  line-height: ${({ theme }) => theme.space[5]};
  text-align: ${(props) => align(props)};
  font-size: ${(props) => fontSize(props)};
`

export default Text;
