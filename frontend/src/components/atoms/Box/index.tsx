import { ReactNode } from "react";
import { Container } from "./styles";

interface BoxProps {
  width?: number;
  height?: number;
  children: ReactNode;
}

export function Box({ width, height, children }: BoxProps) {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
}
