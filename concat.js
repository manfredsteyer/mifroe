const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const filesES5 = [
    './dist/auftrag/runtime-es5.js',
    './dist/auftrag/polyfills-es5.js',
    './dist/auftrag/scripts.js',
    './dist/auftrag/main-es5.js',
    './dist/auftrag/styles-es5.js'
  ];
  const filesES2015 = [
    './dist/auftrag/runtime-es2015.js',
    './dist/auftrag/polyfills-es2015.js',
    './dist/auftrag/scripts.js',
    './dist/auftrag/main-es2015.js',
    './dist/auftrag/styles-es2015.js'
  ];
  await fs.ensureDir('elements');
  await concat(filesES5, 'elements/microfrontend-es5.js');
  await concat(filesES2015, 'elements/microfrontend-es2015.js');
})();
