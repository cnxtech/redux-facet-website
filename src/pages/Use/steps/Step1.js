import React from 'react';
import Step from '../Step';
import H3 from 'components/H3';
import CodeBlock from 'components/CodeBlock';
import P from 'components/P';
import Code from 'components/Code';

const code = `import { connect } from 'react-redux';
import facet, { compose } from '@bandwidth/redux-facet';

/* define mapStateToProps, mapDispatchToProps */

export default compose(
  connect(mapStateToProps),
  facet('myFacet', mapDispatchToProps),
)(View);
`;

export default () => (
  <Step>
    <H3>Step 1: enhance your container with a facet</H3>
      <CodeBlock>
        {code}
      </CodeBlock>
      <P>
        Pass your <Code>mapDispatchToProps</Code> function to <Code>facet</Code> instead of <Code>connect</Code>.
      </P>
      <P>
        Now all actions created by our component will be automatically tagged with the facet name we provided.
        This won't disrupt any existing code which relies on those actions.
      </P>
  </Step>
);
