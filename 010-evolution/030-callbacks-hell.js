import fs from 'fs';

fs.readFile('../dummy/file1.txt', 'utf8', (error, file1Content) => {
  if (error) {
    console.error(error)
  } else {
    fs.readFile('../dummy/file2.txt', 'utf8', (error, file2Content) => {
      if (error) {
        console.error(error)
      } else {
        fs.writeFile('../dummy/joined-files.txt', file1Content + '\n' + file2Content, (error) => {
          if (error) {
            console.error(error)
          } else {
            console.log('DONE')
          }
        })
      }
    })
  }
})
