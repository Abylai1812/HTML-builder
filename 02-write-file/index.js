const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const outputStream = fs.createWriteStream('output.txt');

console.log(' "exit" или нажмите Ctrl+C');

rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('Выход...');
    rl.close();
    return;
  }

  outputStream.write(input + '\n');
  console.log(`Вы ввели: ${input}`);
});

rl.on('close', () => {
  console.log('Программа завершена');
});
