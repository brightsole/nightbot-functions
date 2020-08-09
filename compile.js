const fs = require('fs');
const minify = require('minify');

const fileNames = fs.readdirSync('./src');

const appendToNightbotFile = async (fileName, writer) => {
  const filePath = `src/${fileName}`;

  const minified = await minify(filePath, {
    js: { compress: { defaults: false }, mangle: { toplevel: true } },
  });
  const file = fs.readFileSync(filePath, 'utf-8');

  const startingComment = file.split('\n')[0];
  const commandNameMatch = file.match(/add (![\w-_]+)/i);

  const output = startingComment
    .replace('// ', '') // uncomment it
    .replace('###', minified); // replace ### with our minified js

  writer.write(`### ${commandNameMatch[1]}\n\`\`\`\n${output}\n\`\`\`\n\n`);
};

const compile = async () => {
  const outputWriter = fs.createWriteStream('src/compiled.md');

  await Promise.all(
    fileNames
      .filter(fileName => fileName.includes('.js'))
      .map(fileName => appendToNightbotFile(fileName, outputWriter))
  );

  outputWriter.close();
};

compile();
