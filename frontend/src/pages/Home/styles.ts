import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-auto-flow: dense;

  @media only screen and (max-width: 710px) {
    grid-template-columns: 1fr;
  }
`;

export const Select = styled.select`
  width: 200px;
  height: 40px;

  border-radius: 4px;
  border: 2px solid #ececec;

  padding-left: 10px;
`;
