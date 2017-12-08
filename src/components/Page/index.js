import styled from 'styled-components';

export default styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  grid-auto-rows: auto;
  grid-template-areas: "intro" "diagrams" "how" "why" "who";
  justify-items: center;

  @media(min-width: 2000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "intro how"
                         "diagrams why"
                         "diagrams who";
  }
`;
