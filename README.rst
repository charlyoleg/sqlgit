================
README of sqlgit
================


Presentation
============

*sqlgit* is a proof-of-concept for storing a SQL-database in a git-repository. It uses SQLite_ in mode *in-memory* as SQL-engine. The SQLite-tables are dumped in files that are then committed in a git-repository.

.. _SQLite : https://sqlite.org


Getting Started
===============

In a bash terminal, run::

  git clone
  cd sqlgit
  npm i
  npm run

