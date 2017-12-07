import React from 'react';
import P from '../components/P';
import H1 from '../components/H1';
import H3 from '../components/H3';
import H2 from '../components/H2';
import Code from '../components/Code';
import Section from '../components/Section';

export default () => (
  <Section>
    <H1>Why use facets?</H1>
    <H2>Redux is great, but...</H2>
    <div>
      <H3>
        Reusing common logic behaviors requires too much work.
      </H3>
      <P>
        Reducers by nature are coupled to one specific part of the store, and actions by nature can only relate to one part of your application. An abstraction is needed to lift these behaviors and make them reusable&mdash;so you can write one set of actions, one reducer, and apply those behaviors across as many parts of your state as you like without getting wires crossed.
      </P>
      <P>
        Facets let you encapsulate common behaviors and reuse them across different data sets.
        Reusing behaviors means consistency across your codebase, and fewer tests to write.
      </P>
    </div>
    <div>
      <H3>It's hard to track multi-action operations</H3>
      <P>
        When you have an asynchronous process which is started by a trigger action and dispatches a result action, there are no built-in tools to help you associate the result with the component that triggered it. And add-on solutions like action creator promises introduce update flows outside of Redux' signature action-reducer-container loop.
      </P>
      <P>
        Facets tag your actions when they're created, so you know where they came from.
        The <Code>redux-facet</Code> library provides tools to automatically apply these tags
        to result actions created by <Code>redux-saga</Code>. By tracking your multi-action
        operations, you can tie the results back to the component which triggered them.
      </P>
    </div>
  </Section>
);
