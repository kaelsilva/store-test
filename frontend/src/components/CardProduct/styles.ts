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

export const Button = styled.div<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;

  padding: 10px;

  border-radius: 6px;

  pointer-events: auto;
  user-select: none;

  cursor: pointer;

  &.add {
    background-color: #50fc50;
    color: #0c0c0c;

    :hover {
      background-color: #40ec40;
    }
  }

  &.remove {
    background-color: #fc5050;
    color: #0c0c0c;

    :hover {
      background-color: #ec4040;
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #ececec !important;
      color: #acacac !important;
      pointer-events: none !important;
    `}
`;
