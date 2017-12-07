import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin: auto 0;
  }

  @media(max-width: 600px) {
    flex-direction: column;

    & > * {
      margin: 0 auto 0 0;
    }
  }
`;
