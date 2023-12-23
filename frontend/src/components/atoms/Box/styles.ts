import styled from "styled-components";

interface ContainerProps {
  width?: number;
  height?: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
