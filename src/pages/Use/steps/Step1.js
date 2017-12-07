import React from 'react';
import Step from '../Step';
import H3 from 'components/H3';
import CodeBlock from 'components/CodeBlock';
import P from 'components/P';

const code = `import { connect } from 'react-redux';
import { compose } from 'recompose';
import facet from '@bandwidth/redux-facet';

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
        Now all actions created by our component will be automatically tagged with the facet name we provided.
        If that's all you're looking for, you're done!
      </P>
  </Step>
);
