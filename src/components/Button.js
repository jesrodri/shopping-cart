import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border-radius: ${({ theme }) => theme.radii[2]};
  min-width: ${({ theme }) => theme.sizes[6]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
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
    background-color: ${({ theme }) => theme.colors.hoverButtonBackground};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disButtonBackground};
    color: ${({ theme }) => theme.colors.disButtonText};
  }
`

export default Button;
