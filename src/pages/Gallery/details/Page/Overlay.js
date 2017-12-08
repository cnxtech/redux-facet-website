import styled from 'styled-components';
import theme from 'theme';

export default styled.div`
  position: fixed;
  width: 95vw;
  height: 95vh;
  top: 2.5vh;
  left: 2.5vw;
  box-shadow: 0 0 2vw ${theme.get('colors.background.dimTransparent')};
  background: ${theme.get('colors.background.default')};
  border: 1px solid ${theme.get('colors.text.light')};
`;
