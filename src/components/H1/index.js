import styled from 'styled-components';
import theme from 'theme';

export default styled.h1`
  font-family: 'Work Sans', 'Open Sans', Arial, sans-serif;
  color: ${theme.get('colors.text.default')};
  font-size: 32px;
  font-weight: 200;
  margin: 0;
  padding: 0;
`;
