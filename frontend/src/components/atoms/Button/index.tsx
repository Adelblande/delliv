import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  handleClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, handleClick, ...rest }) => {
  return (
    <Container onClick={handleClick} {...rest}>
      {children}
    </Container>
  );
};
