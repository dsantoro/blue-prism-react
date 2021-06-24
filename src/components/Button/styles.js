import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

export const CardButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  min-width: 120px;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  will-change: opacity;

  &:hover {
    opacity: 0.8;
  }
`;

const spin = keyframes`
  to {
    transform: rotateZ(360deg);
  }
`;

export const Spinner = styled(BiLoaderAlt)`
  animation: ${spin} 2s linear infinite;
`;
