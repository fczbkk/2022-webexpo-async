import fs from 'fs/promises';

Promise.all([
  fs.readFile('../dummy/file1.txt', 'utf8'),
  fs.readFile('../dummy/file2.txt', 'utf8')
])
  .then(fileContents => fs.writeFile('../dummy/joined-files.txt', fileContents.join('\n')))
  .then(() => console.log('DONE'))
  .catch(error => console.error(error));
