import styled from 'styled-components';
import theme from 'theme';

export default styled.nav`
  margin: 0;
  position: fixed;
  top: 1vw;
  left: 1vw;
  display: flex;
  flex-direction: row;
  background: ${theme.get('colors.background.transparent')};
  padding: 8px;
`;
