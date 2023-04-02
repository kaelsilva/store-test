import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    36deg,
    rgba(19, 20, 19, 1) 0%,
    rgba(54, 159, 46, 1) 51%,
    rgba(11, 204, 179, 1) 100%
  );
`;

export const Content = styled.section`
  width: fit-content;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 20px;

  background-color: #fcfcfc;

  padding: 20px 40px 20px 40px;
  margin: 20px 0 20px 0;

  border-radius: 14px;
`;

export const Image = styled.div<{ imageUrl: string | undefined }>`
  background: ${({ imageUrl }) => css`url(${imageUrl})`} no-repeat;

  background-size: cover;

  width: 300px;
  height: 450px;

  border-radius: 14px;
`;

export const H1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;

  max-width: 300px;
`;

export const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;

  max-width: 300px;
`;

export const Span = styled.span`
  &.bold {
    font-weight: 700;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  row-gap: 10px;

  min-height: 400px;
`;
