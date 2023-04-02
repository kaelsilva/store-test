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

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;

  padding: 10px;

  background-color: #50fc50;
  color: #0c0c0c;

  border-radius: 6px;

  pointer-events: auto;
  user-select: none;

  cursor: pointer;

  :hover {
    background-color: #40ec40;
  }
`;
