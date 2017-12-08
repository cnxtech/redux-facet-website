import React from 'react';
import Step from '../Step';
import H3 from 'components/H3';
import CodeBlock from 'components/CodeBlock';
import P from 'components/P';

const code = `const View = ({ currentPage, pageSize, pageCount, nextPage, previousPage, paginatedData }) => (
  <div>
    <div className="data">
      {paginatedData.map(data => <div key={data.id}>{data.value}</div>)}
    </div>
    <div className="pagination">
      <a onClick={previousPage}>Previous</a>
      <span>Page: {currentPage + 1} / {pageCount}</span>
      <a onClick={nextPage}>Next</a>
    </div>
  </div>
);
`;

export default () => (
  <Step>
    <H3>Step 4: use the props provided by behaviors</H3>
    <CodeBlock>
      {code}
    </CodeBlock>
    <P>
      And everything just works!
    </P>
  </Step>
);
