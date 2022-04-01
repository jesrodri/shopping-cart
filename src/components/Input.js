import styled from "styled-components";

const borderColor = ({ theme, error }) => {
  if (error) {
    return theme.colors.input.border;
  } else {
    return theme.colors.input.error;
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
    color: ${({ theme }) => theme.colors.input.option};
  }
`

export default Input;
