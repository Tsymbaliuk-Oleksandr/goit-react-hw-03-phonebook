import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: ${(p) => {
    return p.type === "submit" ? p.theme.fontSizes.s : p.theme.fontSizes.xs;
  }};
  font-weight: ${(p) => {
    return p.type === "submit"
      ? p.theme.fontWeights.bold
      : p.theme.fontWeights.normal;
  }};
  color: ${(p) => p.theme.colors.black};
  margin: ${(p) => p.theme.space[2]}px;
  padding-top: ${(p) => {
    return p.type === "submit" ? "8px" : "0px";
  }};
  padding-bottom: ${(p) => {
    return p.type === "submit" ? "8px" : "0px";
  }};
  border: ${(p) => p.theme.borders.normal};
  border-color: ${(p) => p.theme.colors.muted};
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.colors.background};
  cursor: pointer;
  :hover {
    border-color: ${(p) => {
      return p.type === "submit" ? p.theme.colors.primary : "red";
    }};
    color: ${(p) => {
      return p.type === "submit" ? p.theme.colors.accent : "red";
    }};
  }
`;
