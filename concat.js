const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const filesES5 = [
    './dist/microfrontend/runtime-es5.js',
    './dist/microfrontend/polyfills-es5.js',
    './dist/microfrontend/scripts.js',
    './dist/microfrontend/main-es5.js',
    './dist/microfrontend/styles-es5.js'
  ];
  const filesES2015 = [
    './dist/microfrontend/runtime-es2015.js',
    './dist/microfrontend/polyfills-es2015.js',
    './dist/microfrontend/scripts.js',
    './dist/microfrontend/main-es2015.js',
    './dist/microfrontend/styles-es2015.js'
  ];
  await fs.ensureDir('elements');
  await concat(filesES5, 'elements/microfrontend-es5.js');
  await concat(filesES2015, 'elements/microfrontend-es2015.js');
})();
