import fs from 'fs/promises';

const fileContent = await fs.readFile('../dummy/file1.txt', 'utf8');
console.log(fileContent);
