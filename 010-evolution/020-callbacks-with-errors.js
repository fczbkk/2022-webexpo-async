import fs from 'fs';

fs.readFile('../dummy/file1.txt', 'utf8', (error, fileContent) => {
  if (error) {
    console.error(error)
  } else {
    console.log(fileContent)
  }
})
