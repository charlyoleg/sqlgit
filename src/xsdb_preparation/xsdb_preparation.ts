// xsdb_preparation.ts

import gitignore from './gitignore.js';

function xsdb_preparation () {
  console.log(gitignore.filename);
  console.log(gitignore.content("xsdb_one"));
}


export default xsdb_preparation;

