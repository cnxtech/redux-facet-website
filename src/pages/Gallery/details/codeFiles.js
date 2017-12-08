const webpackCodeLoader = require.context(
  '!raw-loader!../previews',
  false,
  /\.js$/,
);

const codeFiles = webpackCodeLoader
  .keys()
  .reduce((files, filename) => ({ ...files, [filename.replace('./', '')]: webpackCodeLoader(filename) }), {});

export default codeFiles;
