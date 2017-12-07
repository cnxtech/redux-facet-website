import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';
import Container from './Container';
import { withTheme } from 'styled-components';
import color from 'tinycolor2';

export default withTheme(({ theme, children }) => {
  const styles = {
    ...atomDark,
    'code[class*="language-"]': {
      ...atomDark['code[class*="language-"]'],
      color: 'inherit',
      textShadow: 'none',
    },
    'pre[class*="language-"]': {
      ...atomDark['pre[class*="language-"]'],
      color: 'inherit',
      background: 'transparent',
      textShadow: 'none',
    },
    comment: {
      color: theme.colors.text.medium,
    },
    punctuation: {
      color: 'inherit',
    },
    property: {
      color: theme.colors.brand[0],
    },
    keyword: {
      color: theme.colors.brand[2],
    },
    'class-name': {
      color: theme.colors.brand[0],
    },
    boolean: {
      color: theme.colors.brand[2],
    },
    symbol: {
      color: 'inherit',
    },
    number: {
      color: theme.colors.brand[2],
    },
    string: {
      color: theme.colors.brand[0],
    },
    char: {
      color: theme.colors.brand[0],
    },
    builtin: {
      color: theme.colors.brand[2],
    },
    variable: {
      color: theme.colors.brand[2],
    },
    operator: {
      color: theme.colors.brand[2],
    },
    function: {
      color: color(theme.colors.brand[1]).darken(20).toString('hex6'),
    },
  };

  return (
    <Container>
      <SyntaxHighlighter language="javascript" style={styles}>
        {children}
      </SyntaxHighlighter>
    </Container>
  );
});
