import fs from 'fs/promises';

fs.readFile('../dummy/file1.txt', 'utf8')
  .then(fileContent => console.log(fileContent))
  .catch(error => console.error(error));
