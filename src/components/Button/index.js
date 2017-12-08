import styled from 'styled-components';
import theme from 'theme';

export default styled.button`
  background: transparent;
  border: 1px solid ${theme.get('colors.brand[2]')};
  color: ${theme.get('colors.text.default')};
  margin: auto;
  font-size: 1em;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;

  transition: 0.2s all ease;

  &:active {
    outline: none;
  }

  &:hover {
    border: 1px solid ${theme.get('colors.text.default')};
  }
`;
