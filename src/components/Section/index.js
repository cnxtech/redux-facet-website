import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  min-height: ${({ big }) => big ? '60vh' : '10vh'};
  width: 100%;
  margin: 24px auto;

  & > * {
    margin: 24px auto 24px 0;

    &:first-child {
      margin-top: auto;
    }

    &:last-child {
      margin-bottom: auto;
    }
  }
`;
