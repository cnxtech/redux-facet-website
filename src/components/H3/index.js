import styled from 'styled-components';
import theme from '../../theme';

export default styled.h3`
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  color: ${theme.get('colors.text.medium')};
`;
