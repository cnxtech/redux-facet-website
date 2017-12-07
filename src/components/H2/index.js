import styled from 'styled-components';
import theme from '../../theme';

export default styled.h2`
  font-family: 'Open Sans', Arial, sans-serif;
  font-style: italic;
  font-size: 24px;
  color: ${theme.get('colors.text.light')};
  font-weight: 200;
  margin: 0;
  padding: 0;
`;
