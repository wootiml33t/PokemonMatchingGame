import styled from "styled-components";

interface StyleOverrides {
  [key: string]: string | number;
}

interface FlexBoxProps {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  gap?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  styleOverrides?: StyleOverrides;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  gap: ${({ gap }) => gap || "0"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  ${({ styleOverrides }) =>
    styleOverrides &&
    Object.entries(styleOverrides)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n")}
`;

export default FlexBox;
