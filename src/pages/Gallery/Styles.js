import styled from 'styled-components';
import theme from 'theme';

export default styled.div`
  border: 1px solid ${theme.get('colors.text.default')};
  width: 30%;

  .View {
    padding: 12px;
    background: ${theme.get('colors.background.dimTransparent')};
  }

  button {
    background: none;
    border: 1px solid gray;
    padding: 6px 8px;
    border-radius: 2px;
    margin: 12px 0;
  }
`;
