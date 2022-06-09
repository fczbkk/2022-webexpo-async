import fs from 'fs/promises';

fs.readFile('../dummy/file1.txt', 'utf8')
  .then((fileContent1) => {
    fs.readFile('../dummy/file2.txt', 'utf8')
      .then((fileContent2) => {
        fs.writeFile('../dummy/joined-files.txt', fileContent1 + '\n' + fileContent2)
          .then(() => console.log('DONE'))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
