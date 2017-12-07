import React from 'react';
import Step from '../Step';
import H3 from 'components/H3';
import CodeBlock from 'components/CodeBlock';
import P from 'components/P';

const code = `import { combineReducers } from 'redux';
import { combineFacetReducers } from '@bandwidth/redux-facet';
// an example behavior
import { paginationReducer } from '@bandwidth/redux-facet-pagination';

const rootReducer = combineReducers({
  [combineFacetReducers.key]: combineFacetReducers({
    myFacet: combineReducers({
      [paginationReducer.key]: paginationReducer,
    }),
  }),

  /* normal reducers go here, as usual */
});
`;

export default () => (
  <Step>
    <H3>Step 2: mount facet reducers</H3>
      <CodeBlock>
        {code}
      </CodeBlock>
      <P>
        In your root reducer, plug in the facet system and define reducers for your
        facets. Enable any behaviors you want to include in your facets by
        mounting them in your facet reducers.
      </P>
      <P>
        The behaviors are now ready to listen to actions dispatched from your facet-powered container.
        The reducers you've included won't listen to actions from any other source.
      </P>
  </Step>
);
