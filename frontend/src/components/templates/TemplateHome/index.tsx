import { ReactNode } from "react";
import { Title } from "../../atoms";
import { Header } from "../../molecules";
import { Container, Main } from "./styles";

interface TemplateHomeProps {
  children: ReactNode;
}

export function TemplateHome({ children }: TemplateHomeProps) {
  return (
    <Container>
      <Header />
      <Main>
        <Title title="Pedidos" />
        {children}
      </Main>
    </Container>
  );
}
