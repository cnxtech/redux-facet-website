import styled from 'styled-components';
import theme from 'theme';

export default styled.div`
  background: ${theme.get('colors.background.light')};
  color: ${theme.get('colors.text.default')};
  padding: 16px;
  margin: 0;
`;
