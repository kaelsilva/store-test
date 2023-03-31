import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;

  border-radius: 14px;

  background-color: #fcfcfc;

  box-shadow: 5px 5px 15px #cfcfcf;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0 0 0;
`;

export const Image = styled.div<{ imageUrl: string }>`
  background: ${({ imageUrl }) => css`url(${imageUrl})`} no-repeat;

  background-size: cover;

  width: 200px;
  height: 300px;

  border-radius: 14px;
`;
