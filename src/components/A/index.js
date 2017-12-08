import styled from 'styled-components';
import theme from 'theme';
import { Link } from 'react-router-dom';

const A = styled.a`
  color: ${theme.get('colors.brand[2]')};
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  margin: auto 6px auto 6px;

  &:focus {
    outline: none;
  }

  &::after {
    content: '';
    border: 1px solid ${theme.get('colors.brand[2]')};
    border-bottom: none;
    height: 0px;
    width: 100%;
    position: absolute;
    bottom: -1px;
    left: 0;
    transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
      opacity 0.25s ease, border-color 0.2s ease;
    border-radius: 4px;
  }

  &:hover {
    color: ${theme.get('colors.text.default')};
  }

  &:hover::after,
  &:focus::after {
    border: 1px solid ${theme.get('colors.text.default')};
    height: calc(100% + 10px);
    width: calc(100% + 18px);
    left: -10px;
    bottom: -6px;
    transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
      opacity 0s ease, border-color 0.2s ease;
  }
`;

A.Internal = A.withComponent(Link);

export default A;
