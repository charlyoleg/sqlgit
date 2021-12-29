// xsdb_init_one.ts

import gitignore from './gitignore.js';

import fse from 'fs-extra';


async function create_dir (path: string) {
  try {
    const path_exists = await fse.pathExists(path);
    if (!path_exists) {
      console.log(`Create the directory ${path} ...`);
      fse.ensureDir(path);
    } else {
      console.log(`ERR236: Error, the path ${path} exists already!`);
      process.exit(52);
    }
  } catch (err) {
    console.log(`ERR489: Exception thrown by fs-extra by checking or creating the directory ${path}!`);
    console.error(err);
    process.exit(51);
  }
}

async function write_file (path: string, filename: string, fdata:string) {
  console.log(`Write the file ${filename} ...`);
  const fpath = path + '/' + filename;
  try {
    await fse.outputFile(fpath, fdata);
  } catch (err) {
    console.log(`ERR467: Exception thrown by fs-extra by writing the file ${fpath}!`);
    console.error(err);
    process.exit(51);
  }
}

async function xsdb_init_one (path: string, xsdb_name: string) {
  console.log(`Initialize the xsdb ${xsdb_name} ...`);
  await create_dir(path);
  //console.log(gitignore.filename);
  //console.log(gitignore.content(xsdb_name));
  await write_file(path, gitignore.filename, gitignore.content(xsdb_name));
}


export default xsdb_init_one;

