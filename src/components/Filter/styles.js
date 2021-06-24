import styled from "styled-components";

export const Container = styled.select`
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 6px;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  font-size: 14px;

  @media (min-width: 600px) {
    width: calc(100% - 1rem);
  }
`;
