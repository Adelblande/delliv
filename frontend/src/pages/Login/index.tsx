import { asyncLogin } from "../../store/userSlice";
import { useState } from "react";
import { useAppDispatch } from "../../store";

export function Login() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="E-mail"
        onChange={(value) => setEmail(value.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(value) => setPassword(value.target.value)}
      />
      <button
        type="button"
        onClick={() => dispatch(asyncLogin(email, password))}
      >
        Entrar
      </button>
    </form>
  );
}
