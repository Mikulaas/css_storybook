import styled, { css } from "styled-components";

export const SBox = styled.div<{
  color?: "deeppink" | "dodgerblue" | "limegreen";
}>`
  width: 150px;
  height: 150px;
  border-radius: 2px;

  ${({ color = "dodgerblue" }) => css`
    background-color: ${color};
  `}
`;
