import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBackground.default};
  color: ${({ theme }) => theme.colors.buttonText.default};
  border-radius: ${({ theme }) => theme.radii[2]};
  min-width: ${({ theme }) => theme.sizes[6]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes.body2};
  outline: 0;
  border: 0;
  margin: 0;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  padding: 6px 16px;
  margin-top: 24px;
  margin-left: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBackground.hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.buttonBackground.disabled};
    color: ${({ theme }) => theme.colors.buttonText.disabled};
  }
`

export default Button;
