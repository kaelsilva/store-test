import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 500px;

  border-radius: 14px;

  background-color: #fcfcfc;

  box-shadow: 5px 5px 15px #cfcfcf;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0 20px 0;
`;

export const Image = styled.div<{ imageUrl: string }>`
  background: ${({ imageUrl }) => css`url(${imageUrl})`} no-repeat;

  background-size: cover;

  width: 150px;
  height: 225px;

  border-radius: 14px;
`;

export const Button = styled.div<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 30px;

  padding: 10px;

  border-radius: 6px;

  pointer-events: auto;
  user-select: none;

  color: #0c0c0c;

  cursor: pointer;

  transition: 0.3s;

  &.add {
    background-color: #50fc50;

    :hover {
      background-color: #40ec40;
    }
  }

  &.remove {
    background-color: #fc5050;

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

export const H2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;

  color: #0c0c0c;
`;

export const H3 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;

  color: #0c0c0c;
`;

export const Span = styled.span`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;

  color: #0c0c0c;
`;
