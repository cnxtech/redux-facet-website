import React from 'react';
import Live from './index';
import CodeBlock from 'components/CodeBlock';
import Split from './Split';
import Overlay from './Overlay';
import PreviewArea from './PreviewArea';
import PreviewStyles from '../../Preview/Styles';
import A from 'components/A';

export default ({ title, code, children }) => (
  <Overlay>
    <Split>
      <div>
        <div style={{ padding: '8px' }}>
          <A.Internal to="/gallery">Back to Gallery</A.Internal>
        </div>
        <PreviewArea>
          <PreviewStyles>
            {children}
          </PreviewStyles>
        </PreviewArea>
      </div>
      <div style={{ overflowY: 'auto', height: '100%' }}>
        <CodeBlock>
          {code}
        </CodeBlock>
      </div>
    </Split>
  </Overlay>
)
