// gitignore.ts

const gitignore = {
  filename: ".gitignore",
  content: function (xsdb_name:string) { return (
`# .gitignore for xsdb-git-repo ${xsdb_name}
*~
*.pdf
*.tgz
node_modules/
.venv
__pycache__/
build/
# end of .gitignore of ${xsdb_name}
`);}
};

export default gitignore;

