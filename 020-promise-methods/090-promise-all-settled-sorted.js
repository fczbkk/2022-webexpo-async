import fs from 'fs/promises';

Promise.allSettled([
  fs.readFile('../dummy/file1.txt', 'utf8'),
  fs.readFile('../dummy/xxx.txt', 'utf8'),
  fs.readFile('../dummy/file2.txt', 'utf8'),
])
  .then((fileContents) => {
    console.log(
      'file contents:',
      fileContents
        .filter(({status}) => status === 'fulfilled')
        .map(({value}) => value)
    )
    console.warn(
      'failed to load:',
      fileContents
        .filter(({status}) => status === 'rejected')
        .map(({reason}) => reason.path)
    )
  })
  .catch((error) => console.error(error));
