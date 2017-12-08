import styled from 'styled-components';
import GraphicContainer from './GraphicContainer';

export default styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
  margin: auto;
  width: 100%;
  height: 25vh;

  & > * {
    flex: 1;
    margin: auto;
  }

  & > ${GraphicContainer} {
    height: 100%;
    width: auto;
  }

  @media(max-width: 600px) {
    flex-direction: column;
    height: auto;

    & > ${GraphicContainer} {
      height: auto;
      width: 100%;
    }
  }
`;
