// index.ts

import DatabaseConstructor, {Database} from "better-sqlite3";

function openDb(): Database {
  //const db_options = { verbose: console.log };
  const db_options = {};
  let db: Database = new DatabaseConstructor(':memory:', db_options);
  // Some initialization
  return db;
}

console.log("Hello from index.ts of sqlgit!");

const db = openDb();
db.prepare('CREATE TABLE persons (name TEXT, age INT)').run();
const stmt2 = db.prepare('INSERT INTO persons VALUES (?, ?)');
stmt2.run("lilalo", 3);
stmt2.run("toto", 5);
stmt2.run("titi", 12);

const stmt3 = db.prepare('SELECT age FROM persons WHERE name = ?');
const person = stmt3.get('toto');
console.log(person.age);

console.log("Bye from index.ts of sqlgit!");

