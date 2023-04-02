import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
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

  padding: 20px;
  margin: 20px 0 20px 0;

  border-radius: 14px;
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
  width: 1fr;
  height: 40px;

  border-radius: 4px;
  border: 2px solid #ececec;

  background-color: #ececec;
`;

export const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-auto-flow: dense;

  padding: 0 5px 0 5px;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 2fr;
    grid-row-gap: 10px;
  }
`;

export const Input = styled.input`
  width: 1fr;
  height: 35px;

  padding-left: 10px;
  background-color: #ececec;

  border: 2px solid #dcdcdc;
`;

export const H1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
`;
