import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  min-height: ${({ big }) => big ? '60vh' : '10vh'};
  max-width: 900px;
  width: 90vw;

  & > * {
    margin: 24px auto 24px 0;

    &:first-child {
      margin-top: auto;
    }

    &:last-child {
      margin-bottom: auto;
    }
  }

  @media(min-width: 2000px) {
    width: auto;
    min-height: 0;
  }
`;
