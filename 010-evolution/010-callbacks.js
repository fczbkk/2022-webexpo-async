import fs from 'fs';

fs.readFile('../dummy/file1.txt', 'utf8', (_, fileContent) => {
  console.log(fileContent)
})
