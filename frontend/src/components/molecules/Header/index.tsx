import { Container, Logout } from "./styles";
import { useAppDispatch } from "../../../store";
import { logout } from "../../../store/userSlice";

export function Header() {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <img src="/src/assets/logo.jpeg" alt="logo" width={50} height={50} />
      <Logout onClick={() => dispatch(logout())} />
    </Container>
  );
}
