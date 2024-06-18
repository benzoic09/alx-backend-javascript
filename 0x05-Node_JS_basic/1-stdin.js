const readline = require('readline');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  // Interactive mode
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (name) => {
    process.stdout.write(`Your name is: ${name}\n`);
    rl.close();
  });
} else {
  // Non-interactive mode
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
  });

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
