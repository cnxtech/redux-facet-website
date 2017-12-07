import styled from 'styled-components';
import theme from 'theme';

export default styled.span`
  margin: 0;
  padding: 2px;
  display: inline-block;
  font-family: monospace;
  color: ${theme.get('colors.text.default')};
  background: ${theme.get('colors.background.light')};
  border-color: ${theme.get('colors.text.medium')};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
`;
