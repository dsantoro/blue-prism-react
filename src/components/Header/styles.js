import styled from "styled-components";

export const HeaderArea = styled.header`
  box-shadow: rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  margin-bottom: 1rem;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.background};
  transition: 0.3s background-color;
  will-change: background-color;
`;

export const InfoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
