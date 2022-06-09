import fs from 'fs/promises';

fs.readFile('../dummy/file1.txt', 'utf8')
  .then((content) => addFileContent(content, '../dummy/file2.txt'))
  .then((content) => fs.writeFile('../dummy/joined-files.txt', content))
  .then(() => console.log('DONE'))
  .catch((error) => console.error(error));

function addFileContent (content, filePath) {
  return fs.readFile(filePath, 'utf8')
    .then((fileContent) => content + '\n' + fileContent);
}
