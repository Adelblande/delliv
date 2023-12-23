import { ReactNode } from "react";
import { Container } from "./styles";

interface TemplateLoginProps {
  children: ReactNode;
}

export function TemplateLogin({ children }: TemplateLoginProps) {
  return <Container>{children}</Container>;
}
