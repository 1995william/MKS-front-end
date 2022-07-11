import styled from "styled-components";

export const ProdutosContainer = styled.section`
  position: absolute;
  min-width: 938px;
  min-height: 605px;
  left: 247px;
  top: 217px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(2,1fr);
  div {
    max-width: 218px;
    max-height: 285px;
  }
`;
