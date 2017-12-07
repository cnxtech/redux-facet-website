import styled from 'styled-components';
import theme from '../../theme';

export default styled.h1`
  font-family: 'Work Sans', 'Open Sans', Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: ${theme.get('colors.text.default')};
  font-size: 80px;
  font-weight: 200;
  line-height: 1;
`;
