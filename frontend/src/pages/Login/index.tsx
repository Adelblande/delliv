import { SetStateAction, useState } from "react";
import { asyncLogin } from "../../store/userSlice";
import { useAppDispatch } from "../../store";
import { Button, Input, Box } from "../../components/atoms";
import { TemplateLogin } from "../../components/templates";

export function Login() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TemplateLogin>
      <Box width={500} height={500}>
        <img
          src="/src/assets/logo.jpeg"
          alt="logo"
          width={150}
          height={150}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <form>
          <Input
            type="text"
            placeholder="E-mail"
            onChange={(value: { target: { value: SetStateAction<string> } }) =>
              setEmail(value.target.value)
            }
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(value: { target: { value: SetStateAction<string> } }) =>
              setPassword(value.target.value)
            }
          />
          <Button
            type="button"
            disabled={!email && !password}
            onClick={() => dispatch(asyncLogin(email, password))}
          >
            Entrar
          </Button>
        </form>
      </Box>
    </TemplateLogin>
  );
}
