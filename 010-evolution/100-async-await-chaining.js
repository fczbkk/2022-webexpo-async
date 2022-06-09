import fs from 'fs/promises';

try {
  const fileContent1 = await fs.readFile('../dummy/file1.txt', 'utf8');
  const fileContent2 = await fs.readFile('../dummy/file2.txt', 'utf8');
  await fs.writeFile('../dummy/joined-files.txt', fileContent1 + '\n' + fileContent2);
} catch (error) {
  console.error(error);
}
