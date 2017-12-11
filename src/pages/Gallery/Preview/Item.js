import styled from 'styled-components';
import theme from 'theme';
import Styles from './Styles';

export default styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  & > * {
    flex: 0 0 auto;
  }

  & > ${Styles} {
    flex: 0 1 auto;
    overflow-y: auto;
  }
`;
