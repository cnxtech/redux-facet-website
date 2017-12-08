import styled from 'styled-components';
import theme from 'theme';

export default styled.nav`
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;
  padding-top: 1vw;
  padding-left: 1vw;
  display: flex;
  flex-direction: row;
  background: ${theme.get('colors.background.default')};

  @media(max-width: 600px) {
    position: initial;
  }
`;
