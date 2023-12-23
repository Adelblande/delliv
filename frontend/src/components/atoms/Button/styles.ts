import styled from "styled-components";

export const Container = styled.button`
  border-radius: 4px;
  background: var(--purple-400);
  width: 100%;
  height: 45px;
  color: var(--white);
  font-family: Roboto;
  font-weight: bold;
  font-size: 10pt;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
  &:hover {
    filter: brightness(0.9);
    transition: filter 0.2s;
  }
`;
