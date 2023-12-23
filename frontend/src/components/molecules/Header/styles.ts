import styled from "styled-components";
import { SignOut } from "@phosphor-icons/react";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--purple-400);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const Logout = styled(SignOut).attrs({ size: 30 })`
  color: var(--white);
  cursor: pointer;
`;
