import React from 'react';
import Step from '../Step';
import H3 from 'components/H3';
import CodeBlock from 'components/CodeBlock';
import P from 'components/P';
import Code from 'components/Code';
import A from 'components/A';

const code = `npm i --save @bandwidth/redux-facet
`;

export default () => (
  <Step>
    <H3>Step 0: install the library</H3>
      <CodeBlock>
        {code}
      </CodeBlock>
      <P>
        You can grab the <Code>redux-facet</Code> library from
        <A href="https://www.npmjs.com/org/bandwidth">Bandwidth's NPM org.</A>
      </P>
  </Step>
);
