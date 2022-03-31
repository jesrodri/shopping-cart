import styled from "styled-components";

const borderColor = ({ theme, error }) => {
  if (error) {
    return theme.colors.inputBorderColor;
  } else {
    return theme.colors.errorColor;
  }
}

const Input = styled.input`
  display: block;
  font: inherit;
  width: 100%;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-color: ${(props) => borderColor(props)};
  margin-block-start: ${({ theme }) => theme.space[3]};
  padding: 0;

  &:focus {
    outline: none;
  }

  option {
    color: ${({ theme }) => theme.colors.optionColor};
  }
`

export default Input;
