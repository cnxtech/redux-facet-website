import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from 'theme';

export default styled(Link)`
  display: block;
  color: ${theme.get('colors.text.default')};
  margin: auto 12px;
  text-decoration: none;
  font-family: 'Open Sans', Arial, sans-serif;
`;
