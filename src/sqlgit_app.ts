// sqlgit_app.ts

import DatabaseConstructor, {Database} from "better-sqlite3";
import xsdb_init_one from "./xsdb_init/xsdb_init_one.js";

function openDb(): Database {
  //const db_options = { verbose: console.log };
  const db_options = {};
  let db: Database = new DatabaseConstructor(':memory:', db_options);
  // Some initialization
  return db;
}

console.log("Hello from sqlgit_app.ts of sqlgit!");

const db = openDb();
db.prepare('CREATE TABLE persons (name TEXT, age INT)').run();
//console.log(db.pragma('compile_options', { simple: true}));
//console.log(db.pragma('compile_options'));
console.log(db.prepare('select sqlite_version()').get());
db.exec("INSERT INTO persons VALUES ('jojo', 8); \
         INSERT INTO persons VALUES ('juju', 3); \
        ");
const stmt2 = db.prepare('INSERT INTO persons VALUES (?, ?)');
stmt2.run("lilalo", 3);
stmt2.run("toto", 5);
stmt2.run("titi", 12);

const stmt3 = db.prepare('SELECT age FROM persons WHERE name = ?');
const person = stmt3.get('toto');
console.log(person.age);
console.log(stmt3.get('juju'));


console.log("Bye from sqlgit_app.ts of sqlgit!");

