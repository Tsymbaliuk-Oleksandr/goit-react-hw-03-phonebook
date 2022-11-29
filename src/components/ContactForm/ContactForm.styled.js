import styled from "styled-components";

export const Title = styled.p`
  font-size: ${(p) => p.theme.fontSizes.l};
  margin: ${(p) => p.theme.space[3]}px;
`;

export const Input = styled.input`
  margin: ${(p) => p.theme.space[3]}px;
  padding: ${(p) => p.theme.space[2]}px;
  font-size: ${(p) => p.theme.fontSizes.s};
  border: 1px solid ${(p) => p.theme.colors.muted};
  border-radius: ${(p) => p.theme.radii.normal};
  width: 200px;
  :hover,
  :focus {
    border: 1px solid ${(p) => p.theme.colors.background};
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
    border-radius: ${(p) => p.theme.radii.none};
  }
`;
