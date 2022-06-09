import fs from 'fs/promises';

try {
  const fileContent = await fs.readFile('../dummy/file1.txt', 'utf8');
  console.log(fileContent);
} catch (error) {
  console.error(error);
}
