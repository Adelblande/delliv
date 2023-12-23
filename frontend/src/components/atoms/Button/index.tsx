import { ButtonHTMLAttributes, FC } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ handleClick, ...rest }) => {
  return (
    <Container onClick={handleClick} {...rest}>
      Entrar
    </Container>
  );
};
