import React from 'react';
import Step from '../Step';
import H3 from 'components/H3';
import CodeBlock from 'components/CodeBlock';
import P from 'components/P';

const code = `import { connect } from 'react-redux';
import { compose } from 'recompose';
import facet from '@bandwidth/redux-facet';
// the corresponding enhancer for our reducer behavior
import withPagination from '@bandwidth/redux-facet-pagination';

/* define mapStateToProps, mapDispatchToProps */

export default compose(
  connect(mapStateToProps),
  facet('myFacet', mapDispatchToProps),
  withPagination('myData'),
)(View);
`;

export default () => (
  <Step>
    <H3>Step 3: compose behaviors into your container</H3>
      <CodeBlock>
        {code}
      </CodeBlock>
      <P>
        Back in the container, add the enhancers for your behaviors, which will provide
        props to your component.
      </P>
  </Step>
);
