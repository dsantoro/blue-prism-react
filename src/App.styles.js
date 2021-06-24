import styled from "styled-components";

export const GridContainer = styled.main`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-gap: 1rem;
  padding-bottom: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }

  > div {
    height: calc(100vh - 77px - 130px);
    overflow-y: auto;

    @media (max-width: 600px) {
      display: flex;
      height: auto;
      flex-direction: column;
    }    
  }
`;

export const CardWrapper = styled.div`
  @media (max-width: 600px) {
    display: flex;
    overflow-x: scroll;
  }
`;