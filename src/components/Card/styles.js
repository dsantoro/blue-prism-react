import styled, { keyframes } from "styled-components";
import Button from "../Button";

export const Container = styled.a`
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.secondary};
  border: ${({ theme }) => `1px solid ${theme.colors.text}`};
  display: flex;
  padding: 1rem;
  flex-direction: column;
  cursor: pointer;
  margin-right: 1rem;
  width: 300px;
  position: relative;

  > span {
    display: ${({ active }) => (active ? "block" : "none")};
    position: absolute;
    top: 8px;
    right: 8px;
    zoom: 0.7;
  }

  @media (min-width: 600px) {
    margin-right: 1rem;
    margin-left: 0;
    width: auto;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`;

export const CardHeader = styled.header`
  align-items: center;
  display: flex;

  span {
    background-color: rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    border-radius: 36px;
    margin-right: 1rem;
    flex-shrink: 0;
    display: flex;
    height: 36px;
    width: 36px;
    color: ${({ theme }) => theme.colors.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.primary};
    min-width: 205px;
    font-weight: 400;
    margin: 0;
  }
`;

export const CardBody = styled.main`
  margin: 1rem 0;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const CardFooter = styled.footer`
  align-items: center;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;

    > div {
      margin-right: 0 !important;
      margin-bottom: 1rem;
    }

    > object {
      width: 100%;
    }
  }

  span {
    font-weight: 400;
    font-size: 14px;
    display: block;
  }

  div {
    width: 100%;
    margin-right: 1rem;
  }
`;

export const SkelIcon = styled.span`
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
  height: 36px;
  width: 36px;
`;

export const SkelTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: block;
  height: 21px;
  width: 205px;
`;

export const SkelBody = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: block;
  height: 40px;
  width: 100%;
`;

export const SkelDate = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: block;
  height: 18px;
  width: 100%;
`;

export const SkelButton = styled(Button)`
  opacity: 0.6;
`;

const fade = keyframes`
  to {
    opacity: .5;
  }
`;

export const SkelContainer = styled(Container)`
  animation: ${fade} 1s infinite alternate;
`;
