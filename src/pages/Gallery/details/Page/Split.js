import styled from 'styled-components';
import theme from 'theme';

export default styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  & > * {
    flex: 1 0 0;
  }

  & > *:first-child {
    border-right: 1px solid ${theme.get('colors.text.light')};
  }

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;
