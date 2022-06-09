import fs from 'fs/promises';

Promise.allSettled([
  fs.readFile('../dummy/file1.txt', 'utf8'),
  fs.readFile('../dummy/xxx.txt', 'utf8'),
  fs.readFile('../dummy/file2.txt', 'utf8'),
])
  .then((fileContents) => console.log(fileContents))
  .catch((error) => console.error(error));
