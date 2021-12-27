// xsdb_preparation.ts

import gitignore from './gitignore.js';

import fse from 'fs-extra';


async function create_dir (path: string) {
  try {
    const path_exists = await fse.pathExists(path);
    if (!path_exists) {
      console.log(`The directory ${path} is created ...`);
      fse.ensureDir(path);
    } else {
      console.log(`ERR236: Error, the path ${path} exists already!`);
      process.exit(52);
    }
  } catch (err) {
    console.log(`ERR489: Exception thrown by fs-extra by checking or creating the directory ${path}!`);
    process.exit(51);
  }
}

async function write_file (path: string, filename: string, fdata:string) {
  console.log(`Writing file ${filename} ...`);
  const fpath = path + '/' + filename;
  try {
    await fse.outputFile(fpath, fdata);
  } catch (err) {
    console.log(`ERR467: Exception thrown by fs-extra by writing the file ${fpath}!`);
    process.exit(51);
  }
}

async function xsdb_preparation (path: string, xsdb_name: string) {
  await create_dir(path);
  await write_file(path, gitignore.filename, gitignore.content(xsdb_name));
  console.log(gitignore.filename);
  console.log(gitignore.content(xsdb_name));
}


export default xsdb_preparation;

