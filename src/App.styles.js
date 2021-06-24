import styled from "styled-components";

export const GridContainer = styled.main`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-gap: 1rem;
  padding-bottom: 20px;

  > div {
    height: calc(100vh - 77px - 130px);
    overflow-y: auto;
  }
`;
